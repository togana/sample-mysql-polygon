import type { DataSet, Points, Polygons } from "../util";

const pointData: Points = [
  {
    id: 1,
    name: '1',
    location: [3, 3],
  },
  {
    id: 2,
    name: '2',
    location: [2.5, 2.5],
  },
];

const polygonData: Polygons = [
  {
    id: 1,
    name: 'A',
    coordinates: [[[0, 0], [0, 5], [5, 0], [0, 0]]],
  },
];

const expected = [1];

export const dataSet04: DataSet = {
  group: 'test_04',
  points: pointData,
  polygons: polygonData,
  expected,
};
