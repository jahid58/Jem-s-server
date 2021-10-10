const { buildSchema } = require("graphql");

module.exports = buildSchema(
  `
  type Product {
   
        name:String!
        title:String!
        category:String!
        department:String! 
        size:String! 
        color:String!
        brand:String! 
        description:String!
        img:String! 
        price:Float! 


    }
    input ProductInput {
        
        name:String!
        title:String!
        category:String!
        department:String! 
        size:String! 
        color:String!
        brand:String! 
        description:String!
        img:String! 
   
        price:Float! 

    }
    type RootQuery{
        products:[Product!]!
        
   }
   type RootMutation {
         createProduct(productInput:ProductInput):Product
   }
   schema{
       query:RootQuery
       mutation:RootMutation
   }
    `
);
