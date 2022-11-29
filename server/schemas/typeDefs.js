import { gql } from 'apollo-server-express';

const typeDefs = gql`

type Users {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    
  }

  type Mutation

  type Query {
    Users: [ Users ]
  }`;

export default typeDefs;