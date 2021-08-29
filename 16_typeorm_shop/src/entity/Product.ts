import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToOne, ManyToMany, JoinColumn, JoinTable } from 'typeorm'
import { Shop } from './Shop'
import { Tag } from './Tag'

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number = 0

    @Column()
    title: string = ''

    @Column()
    description: string = ''

    @Column()
    price: number = 0

    @ManyToOne(() => Shop, shop => shop.products)
    shop: Shop | undefined

    @ManyToMany(() => Tag)
    @JoinTable()
    tags: Tag[] | undefined
}
