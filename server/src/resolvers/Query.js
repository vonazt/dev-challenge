function allProducts(parent, args, context, info) {
  const where = args.filter
    ? {
      OR: [
        { name_contains: args.filter },
        { suppliedBy_contains: args.filter }
      ]
    }
    : {};
  return context.db.query.products({ where }, info);
}

function product(parent, args, context, info) {
  return context.db.query.products({ where: { id: args.id } }, info);
}

module.exports = {
  allProducts,
  product
};
