const importCollections = async (collections) => {
  for (const { model, data } of collections) {
    await model.deleteMany();
    await model.insertMany(data);
  }
};

module.exports = { importCollections };
