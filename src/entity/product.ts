import { Field, Int, ObjectType} from 'type-graphql'
import {PrimaryGeneratedColumn, Entity, Column, BaseEntity} from 'typeorm'

@ObjectType()
@Entity("Products")
export class Product extends BaseEntity{

    @Field()
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Field(() => String)
    @Column()
    name: string

    @Field(() => Int)
    @Column("int")
    cant: number

}