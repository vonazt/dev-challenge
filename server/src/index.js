const { GraphQLServer } = require('graphql-yoga');


// 1
const suppliers = [{
  id: 'supplier-0',
  name: 'New Co Ltd'
}, {
  id: 'supplier-1',
  name: 'Old Co Ltd'
}];

const resolvers = {
  Query: {
    // 2
    suppliers: () => suppliers
  },
  // 3
  Supplier: {
    id: (root) => root.id,
    name: (root) => root.name
  }
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers
});

server.start(() => console.log('Server is running on http://localhost:4000'));
