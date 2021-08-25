import { hash } from "bcrypt";
import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { User } from "../entity/user";
import { UserInput } from "../validations/user.validation";

@Resolver()
export class UserResolver {
  @Query(() => User)
  async getUsers() {
    return await User.find();
  }




 @Mutation(() => User)
 async register(
      @Arg("data") {name, email, password}: UserInput,
      
  ){

    var hashPassword = await hash(password, 12);

    var user = User.create({
        name,
        email,
        password: hashPassword

    }).save()

    return user
  }




}
