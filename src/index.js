const express = require('express');
const morgan=require('morgan');
app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//settings
app.set('json spaces',2);


//rutas
app.use(require('./routes'));





//empezar server

app.listen(3000, () => {
    console.log('Server lanzado desde el puerto 3000');
});