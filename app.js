const express = require('express');
const app = express();

const listItems = [];

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render('todo', {});
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started.");
});