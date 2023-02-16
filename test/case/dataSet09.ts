import type { DataSet, Points, Polygons } from "../util";

const pointData: Points = [
  {
    id: 1,
    name: '1',
    location: [15, 3],
  },
  {
    id: 2,
    name: '2',
    location: [300, 3],
  },
];

const polygonData: Polygons = [...Array(100000)].map((_, i) => {
  return {
    id: i + 1,
    name: `${i + 1}`,
    coordinates: [[[0 + (i * 5), 6], [2 + (i * 5), 6], [2 + (i * 5), 2], [4 + (i * 5), 2], [4 + (i * 5), 0], [0 + (i * 5), 0], [0 + (i * 5), 6]]],
  };
});

const expected = [...Array(58)].map((_, i) => i + 4);

export const dataSet09: DataSet = {
  group: 'test_09',
  points: pointData,
  polygons: polygonData,
  expected,
};
