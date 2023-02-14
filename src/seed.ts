import { exit } from "process";
import { AppDataSource } from "./data-source";
import { Point } from "./entity/Point";
import { Polygon } from "./entity/Polygon";

const pointData = [
  {
    id: 1,
    name: '1',
    location: [22, 41],
  },
  {
    id: 2,
    name: '2',
    location: [19, 37],
  },
  {
    id: 3,
    name: '3',
    location: [13, 45],
  },
  {
    id: 4,
    name: '4',
    location: [11, 45],
  },
  {
    id: 5,
    name: '5',
    location: [6, 42],
  },
  {
    id: 6,
    name: '6',
    location: [6, 36],
  },
];

const polygonData = [
  {
    id: 1,
    name: 'A',
    coordinates: [[[0, 50], [2, 50], [2, 46], [4, 46], [4, 44], [0, 44], [0, 50]]],
  },
  {
    id: 2,
    name: 'B',
    coordinates: [[[10, 50], [12, 50], [12, 46], [14, 46], [14, 44], [10, 44], [10, 50]]],
  },
  {
    id: 3,
    name: 'C',
    coordinates: [[[5, 40], [9, 40], [9, 34], [7, 34], [7, 38], [5, 38], [5, 40]]],
  },
  {
    id: 4,
    name: 'D',
    coordinates: [[[15, 40], [20, 40], [20, 35], [15, 35], [15, 40]]],
  },
];

type Points = typeof pointData;
const seedPoint = async (data: Points) => {
  await Promise.all(data.map(d => {
    const point = new Point();
    point.id = d.id;
    point.name = d.name;
    point.location = `Point(${d.location[0]} ${d.location[1]})`;
    return AppDataSource.manager.save(point);
  }));
  const points = await AppDataSource.manager.find(Point);
  console.log("Loaded points: ", points);
}

type Polygons = typeof polygonData;
const seedPolygons = async (data: Polygons) => {
  await Promise.all(data.map(d => {
    const polygon = new Polygon();
    polygon.id = d.id;
    polygon.name = d.name;
    polygon.polygon = `Polygon(${d.coordinates.map(c => `(${c.map(i => i.join(' ')).join(',')})`).join(',')})`;
    return AppDataSource.manager.save(polygon);
  }));
  const polygons = await AppDataSource.manager.find(Polygon);
  console.log("Loaded polygons: ", polygons);
}

AppDataSource.initialize().then(async () => {
  await seedPoint(pointData);
  await seedPolygons(polygonData);
  exit(0);
}).catch(error => console.log(error))
