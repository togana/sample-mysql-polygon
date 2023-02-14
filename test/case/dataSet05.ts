import type { DataSet, Points, Polygons } from "../util";

const pointData: Points = [
  {
    id: 1,
    name: '1',
    location: [0, 0],
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

export const dataSet05: DataSet = {
  group: 'test_05',
  points: pointData,
  polygons: polygonData,
  expected,
};
