const Orders = require("../../models/OrdersModel");
const Product = require("../../models/productModel");
const User = require("../../models/UserModel");
const { transformProduct } = require("./merge");

const graphqlResolvers = {
  // finding all user
  user: async () => {
    let result = await User.find({});
    return result;
  },

  // single user orders
  userOrders: async (args) => {
    try {
      let product = await Orders.find({ email: args.email }).populate(
        "product"
      );

      return product.map((pd) => pd.product);
    } catch (err) {
      throw wee;
    }
  },

  // finding all products
  products: async () => {
    try {
      const products = await Product.find();

      const pds = products.map((pd) => {
        return transformProduct(pd);
      });

      return pds;
    } catch (err) {
      throw err;
    }
  },
  deleteProduct: async (args) => {
    const filter = { _id: args._id };
    try {
      const count = await Product.deleteOne(filter);
      return count.deletedCount;
    } catch (err) {
      console.log(err);
    }
  },
  UpdateReviews: async (args) => {
    const filter = { _id: args._id };

    try {
      const product = await Product.findOne(filter);

      const date = await new Date().toISOString();
      args.reviews.date = date;

      if (product.reviews === null) {
        product.reviews = [args.reviews];
      } else {
        product.reviews.push(args.reviews);
      }

      product.save();
      return product;
    } catch (err) {
      console.log(err);
    }
  },
  UpdateDiscount: async (args) => {
    const filter = { _id: args._id };

    try {
      const product = await Product.findOne(filter);
      product.discount = args.discount;

      product.save();
      return product;
    } catch (err) {
      console.log(err);
    }
  },
  // updating single product
  UpdateProduct: async (args, req) => {
    const filter = { _id: args._id };

    let product = await Product.findOneAndUpdate(filter, {
      ...args.productInput,
    });

    return product;
  },

  // creating single product

  createProduct: async (args, req) => {
    const product = new Product({
      title: args.productInput.title,
      name: args.productInput.name,
      date: new Date().toDateString(),
      size: args.productInput.size.join().split(","),
      rating: args.productInput.rating,
      category: args.productInput.category,
      price: +args.productInput.price,
      color: args.productInput.color.join().split(","),
      description: args.productInput.description,
      img: args.productInput.img,
      gender: args.productInput.gender,
      brand: args.productInput.brand,
      material: args.productInput.material,
      discount: args.productInput.discount,
      reviews: args.productInput.reviews,
    });
    try {
      let result = await product.save();

      return result;
    } catch (err) {
      console.log(err);
    }
  },

  createOrders: async (args) => {
    const orders = new Orders({
      product: args.ordersInput.product,
      userName: args.ordersInput.userName,
      email: args.ordersInput.email,
    });
    try {
      const result = await orders.save();
      return result;
    } catch (err) {
      console.log(err);
    }
  },

  createUser: async (args) => {
    const user = new User({
      userName: args.userInput.userName,
      email: args.userInput.email,
      password: args.userInput.password,
    });
    try {
      const result = await user.save();
      return result;
    } catch (err) {
      console.log(err);
    }
  },

  // searching product with any property and value
  dynamicSearch: async (args) => {
    let variable = args.searchObject.topic;
    let value = args.searchObject.value;
    if (variable === "price") {
      value = parseFloat(value);
    }

    value = new RegExp(value, "i");

    const query = {};
    query[variable] = value;

    const product = await Product.find(query);
    return product;
  },
};
module.exports = graphqlResolvers;
