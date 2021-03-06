export const schema = gql`
  type Contact {
    id: Int!
    name: String!
    email: String!
    message: String!
    phone: String!
    createdAt: DateTime!
  }

  type Query {
    contacts: [Contact!]! @skipAuth
    contact(id: Int!): Contact @skipAuth
  }

  input CreateContactInput {
    name: String!
    email: String!
    message: String!
    phone: String!
  }

  input UpdateContactInput {
    name: String
    email: String
    message: String
    phone: String
  }

  type Mutation {
    createContact(input: CreateContactInput!): Contact! @skipAuth
    updateContact(id: Int!, input: UpdateContactInput!): Contact! @skipAuth
    deleteContact(id: Int!): Contact! @skipAuth
  }
`
