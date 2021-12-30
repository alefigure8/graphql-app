import {makeExecutableSchema} from 'graphql-tools'
import {resolver} from './resolver'

const typeDefs = `
    type Query {
        hello: String
        greet(name: String): String
        tasks: [Task]
        Users: [User]
    }

    type Task {
        _id: ID
        title: String!
        description: String!
        number: Int
    }

    type User {
        _id: ID
        firstname: String!
        lastname: String
        age: Int
    }

    type Mutation {
        createTask(input: TaskInput): [Task]
        CreateUser(input: UserInput ): User
        DeleteUser(_id: ID ): User
        UpdateUser(_id: ID, input: UserInput ): User
    }
    
    input TaskInput {
        title: String!
        description: String!
        number: Int
    }

    input UserInput {
        firstname: String!,
        lastname: String,
        age: Int
    }

    `

export default makeExecutableSchema({
    typeDefs: typeDefs, 
    resolvers: resolver
})