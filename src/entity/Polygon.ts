import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm"

@Entity()
export class Polygon {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column('polygon')
    @Index({ spatial: true })
    polygon: string

    @Column()
    group: string
}
