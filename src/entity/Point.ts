import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm"

@Entity()
export class Point {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column('point')
    @Index({ spatial: true })
    location: string

    @Column()
    group: string
}
