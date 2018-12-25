const express = require("express");
const morgan = require("morgan");

const bprouter = require("./blogPostsRouter");

const app = express();

app.use(morgan("common"));
app.use(express.json());

app.use('/blog-posts', bprouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
