import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    id: number = 0

    // @Column({ unique: true })
    // name: string | undefined = ''
}
