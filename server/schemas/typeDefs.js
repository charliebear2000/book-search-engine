// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]
  }
  
  type Book {
   bookId: ID
   description: String
   image: String
   title: String
   authors: String
   link: String
  }

  type Auth{
      token: ID
      user: User
  }

  type Query {
   me: User
   users: [User]
  }

   type Mutation {
      login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): User
   `;

// export the typeDefs
module.exports = typeDefs;