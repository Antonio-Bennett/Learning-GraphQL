const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose
    .connect(
        'mongodb+srv://Antonio:gooa4gT3tZXKGSLC@cluster0.hgnyi.mongodb.net/graphqlBooks?retryWrites=true&w=majority',
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
