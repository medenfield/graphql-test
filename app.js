const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();

app.listen(4000, () => {
  console.log('now listening to requests on port 4000');
})
