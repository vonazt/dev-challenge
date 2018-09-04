function createProduct(parent, args, context, info) {
  return context.db.mutation.createProduct({
    data: {
      name: args.name,
      price: args.price,
      suppliedBy: args.suppliedBy
    }
  }, info);
}

module.exports = {
  createProduct
};
