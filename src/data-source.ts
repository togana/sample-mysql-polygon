import "reflect-metadata"
import { DataSource } from "typeorm"
import { Polygon } from "./entity/Polygon"
import { Point } from "./entity/Point"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "sample",
    synchronize: false,
    logging: false,
    entities: [Polygon, Point],
    migrations: ['src/migration/*.ts'],
    subscribers: [],
})
