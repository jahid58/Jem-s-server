const Orders = require("../../models/OrdersModel");
const Product = require("../../models/productModel");
const User = require("../../models/UserModel");
const { transformProduct } = require("./merge");

const graphqlResolvers = {
  user: async () => {
    let result = await User.find({});
    return result;
  },
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
  productById: async (args) => {
    try {
      const product = await Product.findOne({ _id: args._id });
      return product;
    } catch (err) {
      throw err;
    }
  },
  UpdateReviews: async (args) => {
    const filter = { _id: args._id };

    try {
      const product = await Product.findOne(filter);

      const date = await new Date().toLocaleDateString();
      args.reviews.date = date;
      console.log(date);
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
  UpdateProduct: async (args, req) => {
    const filter = { _id: args._id };

    let product = await Product.findOneAndUpdate(filter, {
      ...args.productInput,
    });

    return product;
  },
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
};
module.exports = graphqlResolvers;
