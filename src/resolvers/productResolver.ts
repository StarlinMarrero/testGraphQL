import { Mutation, Resolver, Arg, Query, Int, Field, InputType } from "type-graphql";
import { Product } from "../entity/product";

@InputType()
class ProductInputs{
    

    @Field()
    name: string
    @Field(() => Int)
    cant: number
}

@InputType()
class ProductUpdate{

    @Field({nullable: true})
    name: string
    @Field(() => Int, {nullable: true})
    cant: number
}

@Resolver()
export class ProductResolver {
    @Mutation(() => Product)
    async createProduct(
      // @Arg("name") name: string,
      // @Arg("quantity", () => Int) quantity: number
      @Arg("variables", () => ProductInputs) variables: ProductInputs
    ) {
      const newProduct = Product.create(variables);
      return await newProduct.save();
    }
 @Query(() => [Product])
  products(){
      return Product.find();
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Arg("id", ()=> String) id:string){

    await Product.delete(id);

    return true;
 
  }

  @Mutation(() => String)
 async updateProduct(
     @Arg("id", ()=> String) id: string,
    @Arg("product", ()=> ProductUpdate) product: ProductUpdate
  ){    
       

         await Product.update({id}, product);
        
   return "El producto ha sido actualizado";
  } 

}
