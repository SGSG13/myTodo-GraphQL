const { gql } = require('apollo-server-express');

const schema = gql`
  type Todo {
    id: ID,
    title: String,
    done: Boolean
  }
  
  input TodoInput {
    title: String!
  }
  
  type Query {
    todos: [Todo!]!
    hello: String
  }
  
  type Mutation {
    addTodo(todo: TodoInput!): Todo
    completeTodo(id: ID!): Todo
    removeTodo(id: ID!): Todo
  }
  
  type Subscription {
     todos: [Todo!]!
   }
`;

module.exports = schema;