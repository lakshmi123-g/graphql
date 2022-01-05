const express = require('express');
//const expressGraphQL = require('express-graphql');
const graphqlHTTP = require('express-graphql').graphqlHTTP;

const schema = require('./schema.js');
const cors = require('cors');

const app = express();

app.use(cors());

/*app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}));*/
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));


app.listen(4000, () => {
    console.log('Server is running on port 4000..');
});
