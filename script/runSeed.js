require("dotenv").config();
const { connectDB } = require("../config/db");

const Admin = require("../models/Admin");
const Customer = require("../models/Customer");
const Coupon = require("../models/Coupon");
const Product = require("../models/Product");
const Order = require("../models/Order");
const Category = require("../models/Category");
const Language = require("../models/Language");
const Currency = require("../models/Currency");
const Attribute = require("../models/Attribute");
const Setting = require("../models/Setting");
const Payment = require("../models/Payment");
const Stock = require("../models/Stock");
const Role = require("../models/Role");

async function runSeed(sourcePath) {
  connectDB();

  const adminData = require(`../${sourcePath}/admin`);
  const customerData = require(`../${sourcePath}/customers`);
  const couponData = require(`../${sourcePath}/coupon`);
  const productData = require(`../${sourcePath}/products`);
  const orderData = require(`../${sourcePath}/orders`);
  const categoryData = require(`../${sourcePath}/categories`);
  const languageData = require(`../${sourcePath}/language`);
  const currencyData = require(`../${sourcePath}/currency`);
  const attributeData = require(`../${sourcePath}/attributes`);
  const settingData = require(`../${sourcePath}/settings`);
  const paymentData = require(`../${sourcePath}/payments`);
  const stockData = require(`../${sourcePath}/stocks`);
  const roleData = require(`../${sourcePath}/roles`);

  try {
    await Language.deleteMany();
    await Language.insertMany(languageData);

    await Currency.deleteMany();
    await Currency.insertMany(currencyData);

    await Attribute.deleteMany();
    await Attribute.insertMany(attributeData);

    await Customer.deleteMany();
    await Customer.insertMany(customerData);

    await Admin.deleteMany();
    await Admin.insertMany(adminData);

    await Category.deleteMany();
    await Category.insertMany(categoryData);

    await Product.deleteMany();
    await Product.insertMany(productData);

    await Coupon.deleteMany();
    await Coupon.insertMany(couponData);

    await Order.deleteMany();
    await Order.insertMany(orderData);

    await Setting.deleteMany();
    await Setting.insertMany(settingData);

    await Payment.deleteMany();
    await Payment.insertMany(paymentData);

    await Stock.deleteMany();
    await Stock.insertMany(stockData);

    await Role.deleteMany();
    await Role.insertMany(roleData);

    console.log(`Data from "${sourcePath}" inserted successfully!`);
    process.exit();
  } catch (error) {
    console.error("error", error);
    process.exit(1);
  }
}

module.exports = runSeed;
