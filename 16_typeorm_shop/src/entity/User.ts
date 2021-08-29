import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm'
import { Shop } from './Shop'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number = 0

    @Column()
    firstName: string = ''

    @Column()
    lastName: string = ''

    @Column()
    email: string = ''

    @OneToOne(() => Shop, shop => shop.user)
    shop: Shop | undefined
}
