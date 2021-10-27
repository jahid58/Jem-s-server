const Order = require("../../models/OrderModel");
const Product = require("../../models/productModel");
const { transformProduct } = require("./merge");

const graphqlResolvers = {
  products: async () => {
    try {
      const products = await Product.find();

      return products.map((pd) => {
        return transformProduct(pd);
      });
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
  createProduct: async (args, req) => {
    const product = new Product({
      title: args.productInput.title,
      name: args.productInput.name,
      date: new Date(args.productInput.date),
      size: args.productInput.size,
      rating: args.productInput.rating,
      category: args.productInput.category,
      price: +args.productInput.price,
      color: args.productInput.color,
      description: args.productInput.description,
      img: args.productInput.img,
      department: args.productInput.department,
      brand: args.productInput.brand,
    });
    try {
      let result = await product.save();

      return result;
    } catch (err) {
      console.log(err);
    }
  },
  createOrder: async (args) => {
    const order = new Order({
      productId: args.orderInput.productId,
      userName: args.orderInput.userName,
      email: args.orderInput.email,
    });
    try {
      const result = await order.save();
      return result;
    } catch (err) {
      console.log(err);
    }
  },
};
module.exports = graphqlResolvers;
