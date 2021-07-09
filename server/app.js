const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

mongoose
    .connect(
        `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.hgnyi.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log('Connected to database'));

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true
    })
);

app.listen(4000, () => console.log('Listening on port 4000'));
