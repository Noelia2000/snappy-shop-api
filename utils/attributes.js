const baseAttributes = require("../shared-utils/attributesBase");
const variants = require("../shared-utils/attributesVariants");

const attributes = [
  {
    ...baseAttributes.color,
    variants: [
      {
        status: "show",
        _id: "63f078f54b86ed26b05281b3",
        name: { en: "Red", es: "Rojo" },
      },
      {
        status: "show",
        _id: "63f078f54b86ed26b05281b4",
        name: { en: "Green", es: "Verde" },
      },
      {
        status: "show",
        _id: "63f078f54b86ed26b05281b5",
        name: { en: "Blue", es: "Azul" },
      },
    ],
  },
  {
    _id: "63f078f54b86ed26b05281b6",
    type: "attribute",
    extraType: "multiple",
    status: "show",
    title: { en: "Size", es: "Tamaño" },
    name: { en: "Size", es: "Tamaño" },
    variants: [
      {
        status: "show",
        _id: "63f078f54b86ed26b05281b7",
        name: { en: "Small", es: "Pequeño" },
      },
      {
        status: "show",
        _id: "63f078f54b86ed26b05281b8",
        name: { en: "Medium", es: "Medio" },
      },
      {
        status: "show",
        _id: "63f078f54b86ed26b05281b9",
        name: { en: "Large", es: "Grande" },
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