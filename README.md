# [JDLT](https://jdlt.co.uk) full-stack developer challenge

My principal aim for this challenge was to use GraphQL to make queries about the products. I had never used GraphQL before, so part of the process was teaching myself how to build out a back-end using it and then how to communicate between the front-end and the server.

There was quite a lot of trial and error as I familiarised myself with the Type schema, resolvers and how the Prisma database works. All my past projects have used MongoDB, so it was also a fun challenge using a different database.

I enjoy the way you can be specific with your requests with GraphQL, and once I'd got my head around how the schema drive the kind of information that can be sent and received from the database, I felt like I had a relatively good - basic - understanding of how it works.

I decided early on to add in a User authorization process as a way of connecting specific suppliers to products, as I thought this would make life easier further down the line when making requests, and would also be good practice finding out how authentication works in GraphQL. I was familiar with bcrypt, hashing, JWT and tokens from other projects, but it was interesting to see how these take the form of Mutations with GraphQL. It was satisfying to see how intuitive connecting Products to Users was, once all the parts were in place.

Probably the most difficult part for me in terms of the back-end was getting used to resolvers, how they work, and also the flow from the schema to the database to the resolvers. Later on, when I was performing more complex tasks such as querying specific products, or searching for products using a filter, I began to feel more comfortable with how it all fits together.

For the front-end I used React Apollo as a framework and client to communicate with the server. At first I spent time getting to understand how Apollo works and how to write queries. Initially, for the task of making dropdown menus for the suppliers and products and then getting the prices, I made one initial request for all the information and then filtered that depending on what options were chosen from the dropdowns. However, to practise writing specific queries, and to see how GraphQL can get the exact information it needs from the server, I decided to break the whole process into three separate components making individual requests each time. I'm not sure this is best practice, but I wanted to experiment with writing specific queries.

The last bit of functionality I added was the Search option. By this stage, I had a much clearer idea of how to go about implementing this, and the biggest challenge was understanding how the search query was resolved in a separate type. Once I understood that, the rest fell into place.

Overall, I really enjoyed learning GraphQL and implementing it for this challenge. The structure of it makes sense to me, and I like how specific you can be with the data. I followed the [How To GraphQL](https://www.howtographql.com/) tutorial for a lot of this challenge, which was an excellent learning tool, and also informed certain decisions, such as using Prisma and Apollo. In the future I'd like to learn how to use GraphQL with MongoDB, and also try out Relay on the front-end to see how it compares with Apollo. 
