require("dotenv").config();
const { connectDB } = require("../config/db");
const { importCollections } = require("./seedHelper");

const Admin = require("../models/Admin");
const adminData = require("../utilsBase/admin");
const Customer = require("../models/Customer");
const customerData = require("../utilsBase/customers");
const Coupon = require("../models/Coupon");
const couponData = require("../utilsBase/coupon");
const Product = require("../models/Product");
const productData = require("../utilsBase/products");
const Order = require("../models/Order");
const orderData = require("../utilsBase/orders");
const Category = require("../models/Category");
const categoryData = require("../utilsBase/categories");
const Language = require("../models/Language");
const languageData = require("../utilsBase/language");
const Currency = require("../models/Currency");
const currencyData = require("../utilsBase/currency");
const Attribute = require("../models/Attribute");
const attributeData = require("../utilsBase/attributes");
const Setting = require("../models/Setting");
const settingData = require("../utilsBase/settings");
const Payment = require("../models/Payment");
const paymentData = require("../utilsBase/payments");
const Stock = require("../models/Stock");
const stockData = require("../utilsBase/stocks");
const Role = require("../models/Role");
const roleData = require("../utils/roles");

connectDB();

const importData = async () => {
  try {
    await importCollections([
      { model: Language, data: languageData },
      { model: Currency, data: currencyData },
      { model: Attribute, data: attributeData },
      { model: Customer, data: customerData },
      { model: Admin, data: adminData },
      { model: Category, data: categoryData },
      { model: Product, data: productData },
      { model: Coupon, data: couponData },
      { model: Order, data: orderData },
      { model: Setting, data: settingData },
      { model: Payment, data: paymentData },
      { model: Stock, data: stockData },
      { model: Role, data: roleData },
    ]);
    console.log("data inserted successfully!");
    process.exit();
  } catch (error) {
    console.error("error", error);
    process.exit(1);
  }
};

importData();