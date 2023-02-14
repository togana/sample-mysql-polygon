use sample;
INSERT INTO `polygons` VALUES
(1, "A", ST_GeomFromText('POLYGON((0 50, 2 50, 2 46, 4 46, 4 44, 0 44, 0 50))')),
(2, "B", ST_GeomFromText('POLYGON((10 50, 12 50, 12 46, 14 46, 14 44, 10 44, 10 50))')),
(3, "C", ST_GeomFromText('POLYGON((5 40, 9 40, 9 34, 7 34, 7 38, 5 38, 5 40))')),
(4, "D", ST_GeomFromText('POLYGON((15 40, 20 40, 20 35, 15 35, 15 40))'));

INSERT INTO `points` VALUES
(1, "1", ST_GeomFromText('POINT(22 41)')),
(2, "2", ST_GeomFromText('POINT(19 37)')),
(3, "3", ST_GeomFromText('POINT(13 45)')),
(4, "4", ST_GeomFromText('POINT(11 45)')),
(5, "5", ST_GeomFromText('POINT(6 42)')),
(6, "6", ST_GeomFromText('POINT(6 36)'));