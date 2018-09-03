const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');


// 1
// const suppliers = [{
//   id: 'supplier-0',
//   name: 'New Co Ltd',
//   products: [{
//     name: 'Small Wrongle',
//     id: 'product-0',
//     price: 5,
//     suppliedBy: 'New Co Ltd'
//   }]
// }, {
//   id: 'supplier-1',
//   name: 'Old Co Ltd',
//   products: [{
//     name: 'Mini Wongle',
//     id: 'product-1',
//     price: 4,
//     suppliedBy: 'Old Co Ltd'
//   }]
// }];

const resolvers = {
  Query: {
    suppliers: (root, args, context, info) => {
      return context.db.query.suppliers({}, info);
    }
  },
  Mutation: {
    createSupplier: (root, args, context, info) => {
      return context.db.mutation.createSupplier({
        data: {
          name: args.name,
          products: [args.products]
        }
      }, info);
    }
  }
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://eu1.prisma.sh/richardtzanov-38ba04/jdlt-challenge/dev',
      secret: 'mysecret123',
      debug: true
    })
  })
});

server.start(() => console.log('Server is running on http://localhost:4000'));
