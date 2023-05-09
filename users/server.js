const express = require("express");
const { graphqlHTTP } = require("express-graphql"); //Similar to SQLAlchemy
const schema = require("./schema/schema");

const app = express();

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

app.listen(4000, () => {
    console.log("Listening on port 4000");
});
