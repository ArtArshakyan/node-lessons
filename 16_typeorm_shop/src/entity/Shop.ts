import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm'
import { Product } from './Product'
import { User } from './User'

@Entity()
export class Shop {
    @PrimaryGeneratedColumn()
    id: number = 0

    @Column()
    name: string = ''

    @OneToOne(() => User, (user) => user.shop)
    @JoinColumn()
    user: User | undefined

    @OneToMany(() => Product, (product) => product.shop)
    products: Product[] | undefined
}
