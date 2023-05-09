const express = require("express");
const { graphqlHTTP } = require("express-graphql"); //Similar to SQLAlchemy
const app = express();

app.use(
    "/graphql",
    graphqlHTTP({
        graphiql: true,
    })
);

app.listen(4000, () => {
    console.log("Listening on port 4000");
});
