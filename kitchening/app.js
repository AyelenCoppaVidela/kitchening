const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => {
    console.log("servidor corriendo 3000");
});

app.get('/', function(req, res ){
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

/* app.get('/ayuda', function(req, res ){
    res.sendFile(path.join(__dirname, '/views/ayuda.html'));
});

app.get('/ofertas', function(req, res ){
    res.sendFile(path.join(__dirname, '/views/ofertas.html'));
});

app.get('/tiendasOficiales', function(req, res ){
    res.sendFile(path.join(__dirname, '/views/tiendasOficiales.html'));
});

app.get('/vender', function(req, res ){
    res.sendFile(path.join(__dirname, '/views/vender.html'));
});

app.get('/creatucuenta', function(req, res ){
    res.sendFile(path.join(__dirname, '/views/creatucuenta.html'));
});

app.get('/ingresa', function(req, res ){
    res.sendFile(path.join(__dirname, '/views/ingresa.html'));
});

app.get('/miscompras', function(req, res ){
    res.sendFile(path.join(__dirname, '/views/miscompras.html'));
}); */

app.use(express.static ("public"));