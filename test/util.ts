import { EntityManager, Raw } from "typeorm";
import { Point } from "../src/entity/Point";
import { Polygon } from "../src/entity/Polygon";

export type Points = {
  id: number,
  name: string,
  location: [number, number],
}[];

export type Polygons = {
  id: number,
  name: string,
  coordinates: [number, number][][],
}[];

export type DataSet = {
  group: string,
  points: Points,
  polygons: Polygons,
  expected: number[],
};

const seedPoint = async (manager: EntityManager, data: Points, group: string) => {
  await Promise.all(data.map(d => {
    const point = new Point();
    point.id = d.id;
    point.name = d.name;
    point.location = `Point(${d.location[0]} ${d.location[1]})`;
    point.group = group;
    return manager.save(point);
  }));
};

const seedPolygons = async (manager: EntityManager, data: Polygons, group: string) => {
  await Promise.all(data.map(d => {
    const polygon = new Polygon();
    polygon.id = d.id;
    polygon.name = d.name;
    polygon.polygon = `Polygon(${d.coordinates.map(c => `(${c.map(i => i.join(' ')).join(',')})`).join(',')})`;
    polygon.group = group;
    return manager.save(polygon);
  }));
}

const init = async (manager: EntityManager, dataSet: DataSet) => {
  await clear(manager);
  await seedPoint(manager, dataSet.points, dataSet.group);
  await seedPolygons(manager, dataSet.polygons, dataSet.group);
}

const clear = async (manager: EntityManager) => {
  await manager.clear(Polygon);
  await manager.clear(Point);
}

// 検証したい処理
const intersectPolygons = async (manager: EntityManager, dataSet: DataSet): Promise<Polygon[]> => {
  // dataSet に含まれる group の point 全部取得
  const points = await manager.find(Point, {
    where: {
      group: dataSet.group,
    }
  });
  // POINT の形式に変換
  const lineStringPoints = points.map(p => p.location.replace('POINT(', '').replace(')', ''));
  // LINESTRING の形式に変換
  const lineString = `ST_GEOMFROMTEXT('LINESTRING(${lineStringPoints.join(',')})')`;

  // ST_INTERSECTS で polygon と lineString が交わる Polygon のみ取得
  const filterPolygons = await manager.find(Polygon, {
      where: {
        group: dataSet.group,
        polygon: Raw((p) => `ST_INTERSECTS(${lineString}, ${p})`),
      },
      order: {
        id: 'asc',
      },
  });
  return filterPolygons;
}

export const check = async (manager: EntityManager, dataSet: DataSet): Promise<boolean> => {
  await init(manager, dataSet);
  const polygons = await intersectPolygons(manager, dataSet);
  await clear(manager);
  const isCheck = dataSet.expected.toString() === polygons.map(p => p.id).toString();
  console.log(`${dataSet.group}: `, dataSet.expected, isCheck);
  return isCheck;
}
