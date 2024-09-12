const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response, next){
    response.render('accueil.ejs', {title: "Accueil"});
});

app.get('/contact', function(request, response, next){
    response.render('contact.ejs', {title: "Contact"});
});

app.get('/culture', function(request, response, next){
    response.render('culture.ejs', {title: "Culture"});
});

app.get('/galerie', function(request, response, next){
    response.render('galerie.ejs', {title: "Galerie"});
});

app.get('/geographie', function(request, response, next){
    response.render('geographie.ejs', {title: "Geographie"});
});

app.get('/histoire', function(request, response, next){
    response.render('histoire.ejs', {title: "Histoire"});
});

app.get('/liens', function(request, response, next){
    response.render('liens.ejs', {title: "Liens"});
});


app.use(function(request, response, next) {
    response.status(404).render('404.ejs', {title: "La page demandée n'existe pas"});
});

app.listen(8080);
console.log("Express démarré !");