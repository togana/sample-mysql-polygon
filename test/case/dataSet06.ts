import type { DataSet, Points, Polygons } from "../util";

const pointData: Points = [
  {
    id: 1,
    name: '1',
    location: [-1, -1],
  },
  {
    id: 2,
    name: '2',
    location: [3, 3],
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

export const dataSet06: DataSet = {
  group: 'test_06',
  points: pointData,
  polygons: polygonData,
  expected,
};
