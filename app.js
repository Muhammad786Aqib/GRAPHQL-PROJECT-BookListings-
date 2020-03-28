const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose')
const app = express();
const cors = require('cors');

app.use(cors());

mongoose.connect('mongodb+srv://book:12345@cluster0-cfrj6.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open',()=>{
    console.log("db connected");
})


// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
