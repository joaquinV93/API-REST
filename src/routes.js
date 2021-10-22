const { Router, application } = require('express');
const router = Router();
const mysql = require('./conector/mysql');

//metodo directo a localhost
router.get('/', (req, res) => {
    res.send("¡Estas en el la página principal!<br> Por favor intenta con otras rutas, las mencionadas en el ejercicio:<br>" +
        "Get /products <br>" +
        "Get /Products/{id} <br>" +
        "POST /Products?name=?,brand=? <br>" +
        "Put/PATCh /products/{id} <br>" +
        "Delete /Products/{id} ");//Responde a la peticion
    res.status(200);//Manda status de la solicitud
});

//metodo Index
router.get('/products', (req, res) => {
    let busqueda = true;
    let field = req.query['field'];
    let sort = req.query['sort'];
    let campo, valcampo;
    if (req.query['id'] != null) {
        valcampo = req.query['id'];
        campo = 'id';
    }
    else
        if (req.query['name'] != null) {
            valcampo = req.query['name'];
            campo = 'name';
        }
        else
            if (req.query['brand'] != null) {
                valcampo = req.query['brand'];
                campo = 'brand';
            }
            else
                if (req.query['created_at'] != null) {
                    valcampo = req.query['created_at'];
                    campo = 'created_at';
                }
                else
                    if (req.query['updated_at'] != null) {
                        valcampo = req.query['updated_at'];
                        campo = 'updated_at';
                    }
                    else
                        busqueda = false;

    let sort1, sort2, sort3, sort4;
    if (sort != null) {
        if (sort.includes("id-") || sort.includes("id ")) {
            if (sort.includes("id-")) {
                sort1 = "id DESC";

            }
            else {
                sort1 = "id ASC";
            }
        }
        if (sort.includes("name-") || sort.includes("name ")) {
            if (sort.includes("name-")) {
                sort2 = "name DESC";

            }
            else {
                sort2 = "name ASC";
            }
        }
        if (sort.includes("brand-") || sort.includes("brand ")) {
            if (sort.includes("brand-")) {
                sort3 = "brand DESC";
            }
            else {
                sort3 = "brand ASC";
            }

        }

    }
    if (sort1 != null) {
        if (sort4 == null) {
            sort4 = sort1;
        }
        else {
            sort4 += "," + sort1;
        }
    }

    if (sort2 != null) {
        if (sort4 == null) {
            sort4 = sort2;
        }
        else
            sort4 += "," + sort2;
    }

    if (sort3 != null) {
        if (sort4 == null) {
            sort4 = sort3;
        }
        else {
            sort4 += "," + sort3;
        }
    }

    if (busqueda) {//apto para hacer la búsqueda específica
        let consulta;

        if (sort != null) {
            consulta = "select " + field + " from products " + "where " + campo + "='" + valcampo + "' ORDER BY " + sort4 + ";"
        }
        else {
            if (field != null)
                consulta = "select " + field + " from products " + "where " + campo + "='" + valcampo + "';";
            else
                consulta = "select * from products"
        }
        
        mysql.query(consulta, (err, rows, fields) => {
            if (!err) {
                res.send(rows);
                console.log("200 OK");
                res.status(200);
            }
            else {
                res.status(403);
                res.send("Revise por favor el contenido de la URL, para hacer un búsqueda personalizada, necesita de los parametros:" +
                    " <br> field:  Indicando el nombre o nombres de los campos qe quieres que se muestren: id,name,brand" +
                    "<br>sort:  Indicando el Orden de los datos que se van a dezplegar: name-,id+, brand-" +
                    "<br>Nombre_de_campo: en el que se indica el campo por que cual se realizara la busqueda: EJEM  id=1, brand=Sansung");
            }
        });
    }
    else { //  si no muestra todos los productos
        mysql.query('select * from products', (err, rows, fields) => {
            if (!err) {
                res.send(rows);
            }
            else {
                res.status(403);
                res.send("Revise por favor el contenido de la URL, para hacer un búsqueda personalizada, necesita de los parametros:"+
                " <br> field:  Indicando el nombre o nombres de los campos qe quieres que se muestren: id,name,brand"+
                "<br>sort:  Indicando el Orden de los datos que se van a dezplegar: name-,id+, brand-"+
                "<br>Nombre_de_campo: en el que se indica el campo por que cual se realizara la busqueda: EJEM  id=1, brand=Sansung");
            }
        });

    }

});

//metodo Fecht
router.get('/products/:id', (req, res) => {
    let { id } = req.params;
    let vid = parseInt(id);
    if (!isNaN(vid)) {
        consulta = "select * from products where id='" + id + "'"
        mysql.query(consulta, (err, rows, fields) => {
            if (!err) {
                res.send(rows);
                res.status(200);
            }
            else {
                res.status(403);
                res.send("Error ID contiene caracteres no validos");
            }
        })
    }
    else {
        res.status(403);
        res.send("Error ID contiene caracteres no validos");
    }

});

//metodo Store
router.post('/products', (req, res) => {
    let name = req.query['name'];
    let brand = req.query['brand'];
    if (brand != null && name != null && name.length<80) {
        let llamada = `
        call AgregarProducto(?,?);
        `;
        mysql.query(llamada, [name, brand], (err, rows, fields) => {
            if (!err) {
                res.send("Guardado con éxito");
                res.status(200);
            }
            else {
                res.status(403);
                res.send("Los parametros deben contener name y brand, o bien revise que contenga datos validos");
            }
        });
    }
    else {
        res.status(403);
        res.send("Revise los parametros que contenga datos validos y que su tamaño no pase los 80 caracteres");
    }
});


//metodo Update
router.put('/products/:id', (req, res) => {
    let { id } = req.params;
    let name = req.query['name'];
    let brand = req.query['brand'];
    let vid, vname, vbrand;
    vid = parseInt(id);
    if (name.length < 255)
        vname = name;
    if (brand.length < 255)
        vbrand = brand;

    if (!isNaN(id) && vname != null && vbrand != null) {
        let llamada = `
        call UpdateProducto(?,?,?);
        `;
        mysql.query(llamada, [vid, vname, vbrand], (err, rows, fields) => {
            if (!err) {
                res.send("Update realizado con éxito");
                res.status(200);
            }
            else {
                res.status(403);
                res.send("Error ID, name o Brand contiene datos no validos");
            }
        });
    }
    else {
        res.status(403);
        res.send("Error ID, name o Brand contiene datos no validos");
    }
});

router.patch('/products/:id', (req, res) => {
    let { id } = req.params;
    let name = req.query['name'];
    let brand = req.query['brand'];
    let vid, vname, vbrand;
    vid = parseInt(id);
    if (name.length < 255)
        vname = name;
    if (brand.length < 255)
        vbrand = brand;

    if (!isNaN(id) && vname != null && vbrand != null) {
        let llamada = `
        call UpdateProducto(?,?,?);
        `;
        mysql.query(llamada, [vid, vname, vbrand], (err, rows, fields) => {
            if (!err) {
                res.send("Update realizado con éxito");
                res.status(200);
            }
            else {
                res.status(403);
                res.send("Error ID, name o Brand contiene datos no validos");
            }
        });
    }
    else {
        res.status(403);
        res.send("Error ID, name o Brand contiene datos no validos");
    }
});
//metodo Destroy

router.delete('/products/:id', (req, res) => {
    let { id } = req.params;
    let valida = parseInt(id);
    if (!isNaN(valida)) {
        let llamada = `
        call DestroyProducto(?);
        `;
        mysql.query(llamada, [id], (err, rows, fields) => {
            if (!err) {
                res.send("Producto eliminado con éxito");
                res.status(200);
            }
            else {
                console.log(err);
                res.status(403);
                send("No se pudo realizar la peticion por que el ID Es invalido o no es un número");
            }
        });
    }
    else {
        res.status(403);
        send("No se pudo realizar la peticion por que el ID Es invalido o no es un número");
    }
});

//URL no valida
router.use(function (req, res, next) {
    respuesta = "URL No Válida"
    res.status(404).send(respuesta);

});

module.exports = router;