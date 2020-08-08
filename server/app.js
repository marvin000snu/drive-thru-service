const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
    res.json({message: "hello world"});
})

app.listen(process.env.PORT || 3000, () => {
    console.log("running!!!");
  });