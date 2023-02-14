import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Point {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column('point')
    location: string

    @Column()
    group: string
}
