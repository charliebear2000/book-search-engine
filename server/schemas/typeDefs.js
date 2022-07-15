// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  
  type Book {
   bookId: String
   description: String
   image: String
   title: String
   authors: [String]
   link: String
  }

  type Auth{
      token: ID!
      user: User
  }

  type Query {
   getSingleUser(username: String!): User
   me: User
  }

  input BookInput {
      bookId: String
      description: String
      image: String
      title: String
      authors: [String]
      link: String
   }

   type Mutation {
      login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      saveBook(book: BookInput!): User
      removeBook(bookId: String!): User
   }
   `;

// export the typeDefs
module.exports = typeDefs;