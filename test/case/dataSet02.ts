import type { DataSet, Points, Polygons } from "../util";

const pointData: Points = [
  {
    id: 1,
    name: '1',
    location: [2, 1],
  },
  {
    id: 2,
    name: '2',
    location: [1, 1],
  },
  {
    id: 3,
    name: '3',
    location: [1, 2],
  },
];

const polygonData: Polygons = [
  {
    id: 1,
    name: 'A',
    coordinates: [[[1, 1], [1, 5], [5, 1], [1, 1]]],
  },
];

const expected = [1];

export const dataSet02: DataSet = {
  group: 'test_02',
  points: pointData,
  polygons: polygonData,
  expected,
};
