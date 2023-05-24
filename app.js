const date = require(__dirname + '/date.js');
const createItem = require(__dirname + '/item.js');
const _ = require('lodash');

const express = require('express');
const app = express();

const listItems = [];

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render('todo', {listItems: listItems});
});

app.post("/", (req, res) => {
    let newItem = String(req.body.addItemTxt);
    newItem = newItem.trim();
    if (newItem === '' || newItem === null) {
        res.redirect("/");
    } else {
        let itemDate = date.getDate();
        let title = newItem.slice(0, 11);
        let theItem = createItem.newItem(title, newItem, itemDate);
        listItems.push(theItem);
        res.redirect("/");
    }
    
});

app.get("/todo/view/:itemParam", (req, res) => {
    const itemUrl = _.lowerCase(req.params.itemParam);
    listItems.forEach(item => {
        const itemTitle = _.lowerCase(item.title);
        if (itemTitle === itemUrl) {
            res.render("view", {itemTitle: item.title, itemBody: item.body, itemDate: item.dateCreated});
        }
    })
    
});


app.listen(process.env.PORT || 3000, () => {
    console.log("Server started.");
});