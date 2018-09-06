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

module.exports = {
  product,
  allUsers,
  userProducts,
  user
};
