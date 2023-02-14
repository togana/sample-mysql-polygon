import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Polygon {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column('polygon')
    polygon: string

    @Column()
    group: string
}
