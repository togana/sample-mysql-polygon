import { Entity, PrimaryGeneratedColumn, Column, Polygon as P } from "typeorm"

@Entity()
export class Polygon {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column('geometry')
    geometry: P
}
