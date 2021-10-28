const { buildSchema } = require("graphql");

module.exports = buildSchema(
  `
  type User {
    userId:ID!
    userName:String!
    email:String!
    password:String!
 
  }
  type Product {
    _id: ID!
      date:String!
        name:String!
        title:String!
        category:String!
        rating:Float!
        department:String! 
        size:[String!]! 
        color:[String!]!
        brand:String! 
        description:String!
        img:String! 
        price:Float! 


    }
  type  Orders {
    product:ID!
    userName:String!
    email:String!
  }
  input UserInput {
    userId:ID!
    userName:String!
    email:String!
    password:String!
    
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
 input OrdersInput {
  product:ID!
  userName:String!
  email:String!

}
    type RootQuery{
        products:[Product!]!
        productById(_id:ID!):Product
        userOrders(email:String!):[Product!]!
        user:[User!]!
        
   }
   type RootMutation {
         createProduct(productInput:ProductInput):Product
         createOrders(ordersInput:OrdersInput):Orders
         createUser(userInput:UserInput):User
         
   }
   schema {
       query:RootQuery
       mutation:RootMutation
   }
    `
);
