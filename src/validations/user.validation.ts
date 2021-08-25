import {IsEmail, Max, Min} from 'class-validator';
import { Field, InputType, ObjectType } from 'type-graphql';


@InputType()
export class UserInput{
    
    @Field()
    name: string

    @Field()
    @IsEmail()
    email: string

    @Field()
    password: string

}

// @Arg("name") name: string,
// @Arg("email") email: string,
// @Arg("password") pass:string