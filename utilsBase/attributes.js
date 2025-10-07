const baseAttributes = require("../shared-utils/attributesBase");
const variants = require("../shared-utils/attributesVariants");

const attributes = [
  {
    ...baseAttributes.color,
    variants: [
      {
        status: "show",
        _id: "63f078f54b86ed26b05281b3",
        name: { en: "Orange", es: "Naranja" },
      },
      {
        status: "show",
        _id: "63f078f54b86ed26b05281b4",
        name: { en: "Pink", es: "Rosa" },
      },
      {
        status: "show",
        _id: "63f078f54b86ed26b05281b5",
        name: { en: "Blue", es: "Azul" },
      },
      {
        status: "show",
        _id: "63f078f54b86ed26b05281b7",
        name: { en: "Black", es: "Negro" },
      },
      {
        status: "show",
        _id: "63f078f54b86ed26b05281b6",
        name: { en: "White", es: "Blanco" },
      },
    ],
  },
  {
    _id: "63f078f54b86ed26b05281b6",
    type: "attribute",
    extraType: "multiple",
    status: "show",
    title: { en: "Models", es: "Modelos" },
    name: { en: "Models", es: "Modelos" },
    variants: [
      {
        status: "show",
        _id: "63f078f54b86ed26b05281b7",
        name: { en: "iPhone Air", es: "iPhone Air" },
      },
      {
        status: "show",
        _id: "63f078f54b86ed26b05281b8",
        name: { en: "Pro", es: "Pro" },
      },
      {
        status: "show",
        _id: "63f078f54b86ed26b05281b9",
        name: { en: "Pro Max", es: "Pro Max" },
      },
    ],
    option: "Radio",
  },
  {
    ...baseAttributes.giftWrap,
    variants: variants.giftWrap,
  },
  {
    ...baseAttributes.package,
    variants: variants.package,
  },
];

module.exports = attributes;