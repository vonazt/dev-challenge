function product(parent, args, context, info) {
  return context.db.query.products({ where: { id: args.id } }, info);
}

function user(parent, args, context, info) {
  return context.db.query.users({ where: { id: args.id } }, info);
}

function allUsers(parent, args, context, info) {
  return context.db.query.users({}, info);
}

function userProducts(parent, args, context, info) {
  return context.db.query.users({ where: { id: args.id } }, info);
}

async function search(parent, args, context, info) {
  const where = args.filter
    ? { OR: [{ name_contains: args.filter }, { suppliedBy: { name_contains: args.filter } }] }
    : {};

  const queriedProducts = await context.db.query.products({ where }, '{ id }');

  return {
    productIds: queriedProducts.map(product => product.id)
  };
}

module.exports = {
  product,
  search,
  user,
  allUsers,
  userProducts
};
