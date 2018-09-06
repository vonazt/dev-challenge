function products(parent, args, context, info) {
  return context.db.query.products({ where: { id_in: parent.productIds } }, info);
}

module.exports = {
  products
};
