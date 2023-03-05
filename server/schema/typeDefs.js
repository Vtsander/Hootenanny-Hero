const { gql } = require('apollo-server-express');

const typeDefs = gql`
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

  type Mutation {
    createEvent(input: EventInput!): Event!
    updateEvent(id: ID!, input: EventInput!): Event!
    deleteEvent(id: ID!): Boolean!
  }
`;

module.exports = typeDefs;