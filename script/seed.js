require("dotenv").config();
const { connectDB } = require("../config/db");
const { importCollections } = require("./seedHelper");

const Admin = require("../models/Admin");
const adminData = require("../utils/admin");
const Customer = require("../models/Customer");
const customerData = require("../utils/customers");
const Coupon = require("../models/Coupon");
const couponData = require("../utils/coupon");
const Product = require("../models/Product");
const productData = require("../utils/products");
const Order = require("../models/Order");
const orderData = require("../utils/orders");
const Category = require("../models/Category");
const categoryData = require("../utils/categories");
const Language = require("../models/Language");
const languageData = require("../utils/language");
const Currency = require("../models/Currency");
const currencyData = require("../utils/currency");
const Attribute = require("../models/Attribute");
const attributeData = require("../utils/attributes");
const Setting = require("../models/Setting");
const settingData = require("../utils/settings");
const Payment = require("../models/Payment");
const paymentData = require("../utils/payments");
const Stock = require("../models/Stock");
const stockData = require("../utils/stocks");
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
