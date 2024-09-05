const express = require('express');
const app = express();

app.get('/', function(request, response, next){
    response.render('accueil.ejs');
});




app.use(function(request, response, next) {
    response.status(404).render('404.ejs', {msg: "La page demandée n'existe pas"});
});

app.listen(8080);
console.log("Express démarré !");