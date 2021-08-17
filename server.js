const express = require('express');
const app = express();


app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
    try {
        console.log('Sever online en puerto 3000 tankesito, welcom');
    } catch (error) {
        console.log('hubo un error: ' + error);
    }
})