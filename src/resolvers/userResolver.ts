import { hash } from "bcrypt";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../entity/user";

@Resolver()
export class UserResolver {
  @Query(() => User)
  async getUsers() {
    return await User.find();
  }

  @Mutation(() => User)
 async register(
      @Arg("name") name: string,
      @Arg("email") email: string,
      @Arg("password") pass:string
  ): Promise <User>{

    var hashPassword = await hash(pass, 12);

    var user = User.create({
        name,
        email,
        password: hashPassword

    }).save()

    return user
  }



}
