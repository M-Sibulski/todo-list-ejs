const express = require('express');
const app = express();
const https = require("https");
const { post } = require('jquery');
app.use(express.urlencoded({extended: true}));
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
const date = require(__dirname + '/date.js');

app.use(express.static("public"));
const items = ['Lavar a louca', 'Fazer palavra cruzadas', 'Ajudar o peixe a digitar quarenta palavras em um item da minha ToDo List para testar se o card vai ficar em setenta por cento da largura e o texto vai criar uma linha nova'];
const workItems = [];

app.get('/', (req,res) => {
    //res.sendFile(__dirname + "/index.html");
    //var options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'}
    /* let today = new Date();
    let weekDay = today.toLocaleDateString("en-US", {weekday: 'long'});
 */
    
    res.render('index', {listTitle: date.getDate() , items: items});
    //let html = ejs.render('<%= people.join(", "); %>', {people: people});
})



// app.post('/', (req,res) => {
    
// });
app.get("/work", (req,res) => {
    res.render('index', {listTitle: "Work list" , items: workItems});
})

app.get("/about", (req,res) => {
    res.render('about');
})

app.post('/', (req,res) => {
    if(req.body.newToDo) {
        if(req.body.submit === "Work") {
            console.log(req.body);
            const newItem = req.body.newToDo;
            workItems.push(newItem);
            res.redirect('/work');
        }
        else {
            console.log(req.body);
            const newItem = req.body.newToDo;
            items.push(newItem);
            res.redirect('/');
        }
        
    } else {
        console.log('Input Empty');
    }
})

app.listen (port, () => {
    console.log("Server is running on port 3000.")
})
