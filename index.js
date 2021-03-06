'use strict'
require('dotenv').config();
const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const fs = require('fs');
const resolvers = require('./lib/resolvers');

const app = express()
const port = process.env.port || 3000 ; 
const schemaPath = './lib/schema.graphql';

// definiendo el esquema
const typeDefs =  fs.readFileSync(schemaPath, 'utf-8');
const schema = makeExecutableSchema({typeDefs, resolvers});

app.use('/api', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})

