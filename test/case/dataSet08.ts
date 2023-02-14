import type { DataSet, Points, Polygons } from "../util";

const pointData: Points = [
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

const polygonData: Polygons = [
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

const expected = [2, 3, 4];

export const dataSet08: DataSet = {
  group: 'test_08',
  points: pointData,
  polygons: polygonData,
  expected,
};
