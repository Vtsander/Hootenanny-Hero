const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  id: ID!
  name: String!
  email: String!
}

type Query {
  getUserById(id: ID!): User
  getAllUsers: [User]!
}

type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, firstName: String, lastName: String, email: String, password: String): User
  deleteUser(id: ID!): User!
}

  type Event {
    id: ID!
    name: String!
    date: String!
    location: String!
  }

  type Query {
    events: [Event!]!
    event(id: ID!): Event!
  }

  input EventInput {
    name: String!
    date: String!
    location: String!
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
`;

module.exports = typeDefs;