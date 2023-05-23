const date = require(__dirname + '/date.js');
const createItem = require(__dirname + '/item.js');

const express = require('express');
const app = express();

const listItems = [];

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render('todo', {listItems: listItems});
});

app.post("/", (req, res) => {
    let newItem = String(req.body.addItemTxt);
    let itemDate = date.getDate();
    let theItem = createItem.newItem(newItem, itemDate);
    listItems.push(theItem);
    res.redirect("/");
});


app.listen(process.env.PORT || 3000, () => {
    console.log("Server started.");
});