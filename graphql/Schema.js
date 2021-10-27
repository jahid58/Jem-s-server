const { buildSchema } = require("graphql");

module.exports = buildSchema(
  `
  type Product {
    _id: ID!
      date:String!
        name:String!
        title:String!
        category:String!
        rating:Float!
        department:String! 
        size:[String]! 
        color:[String]!
        brand:String! 
        description:String!
        img:String! 
        price:Float! 


    }
  type  Order {
    productId:[String!]!
    userName:String!
    email:String!
  }
    input ProductInput {
        date: String!
        name:String!
        title:String!
        rating:Float!
        category:String!
        department:String! 
        size:[String!]!
        color:[String!]!
        brand:String! 
        description:String!
        img:String! 
        price:Float! 

    }
input OrderInput {
productId:[String!]!
userName:String!
email:String!
}
    type RootQuery{
        products:[Product!]!
        productById(_id:ID!):Product
        
   }
   type RootMutation {
         createProduct(productInput:ProductInput):Product
         createOrder(orderInput:OrderInput):Order
   }
   schema{
       query:RootQuery
       mutation:RootMutation
   }
    `
);
