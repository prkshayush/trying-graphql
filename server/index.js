const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const express = require('express');

async function startServer() {
    const app = express();
    const server = new ApolloServer({
        // ! represents that the field is required
        typeDefs: `
            type User {
                id: ID!
                name: String!
                username: String!
            },
            type Todo {
                id: ID!
                title: String!
                completed: Boolean!
                userId: ID!
                user: User
            }

            type Query {
                getTodos: [Todo]
                getAllUsers: [User]
                getUser(id: ID!): User
            }
        `,
        resolvers: {
            Todo: {
                user: async (todo) => (await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.userId}`)).data,
            },
            Query: {
                getTodos: async () => (await axios.get("https://jsonplaceholder.typicode.com/todos")).data,
                getAllUsers: async () => (await axios.get("https://jsonplaceholder.typicode.com/users")).data,
                getUser: async (parent, { id }) => (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data
            }
        },
        formatError: (err) => {
            console.error('GraphQL Error:', err);
            return new Error('Internal server error');
        }
    });
    // we need to give query and mutation resolvers to the server that will resolve the graphql query
    app.use(bodyParser.json());
    app.use(cors());
    await server.start();

    app.use("/graphql", expressMiddleware(server));

    app.listen(8000, () => {
        console.log("server is running on port 8000");
    })
}

startServer();