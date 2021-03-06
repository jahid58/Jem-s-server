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
        gender:String! 
        size:String! 
        color:String!
        brand:String! 
        material:String!
        description:String!
        img:String! 
        price:Float! 
        reviews:[Reviews]
        discount:Discount


    }
  
  type  Orders {
    products:[String]
    name:String
    email:String
    paymentId:String
  }
  type Reviews{
    reviewer:String!
    comment:String!
    rating:Float!
    date:String
  }
  type Discount{
    discountMessage:String
    discountAmount:Float
    discountPercentage:Float
  }
  input SearchObjectInput{
    topic:String!
    value:String
  }

  input UserInput {
    userId:ID!
    userName:String!
    email:String!
    password:String!
    
  }
    input ProductInput {
        name:String!
        title:String!
        rating:Float!
        category:String!
        gender:String! 
        size:String!
        color:String!
        brand:String! 
        material:String!
        description:String!
        img:String! 
        price:Float! 
        reviews:[ReviewsInput]
        discount:DiscountInput

    }
 input OrdersInput {
  products:[String]
  name:String
  email:String
  paymentId:String
}
input ReviewsInput{
  reviewer:String!
  comment:String! 
  rating:Float! 
}
input DiscountInput{
  discountMessage:String
  discountAmount:Float
  discountPercentage:Float
}
input IdsInput {
  ids:String
}
    type RootQuery{
        products:[Product!]!
        userOrders(email:String!):[Product!]!
        user:[User!]!
        dynamicSearch(searchObject:SearchObjectInput):[Product]
        productsByIds(idsInput:IdsInput):[Product]
        
   }
   type RootMutation {
         createProduct(productInput:ProductInput):Product
         createOrders(ordersInput:OrdersInput):Orders
         createUser(userInput:UserInput):User
         UpdateReviews(_id:ID!,reviews:ReviewsInput):Product
         UpdateDiscount(_id:ID!,discount:DiscountInput):Product
         UpdateProduct(_id:ID!,productInput:ProductInput):Product
        deleteProduct(_id:ID!):Float!
         
   }
   schema {
       query:RootQuery
       mutation:RootMutation
   }
    `
);
