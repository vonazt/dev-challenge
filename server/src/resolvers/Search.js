function products(parent, args, context, info) {
  console.log('parent ids ====>', parent.productIds);
  return context.db.query.products({ where: { id_in: parent.productIds } }, info);
}

module.exports = {
  products
};
