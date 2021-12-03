
const Product = require('../../db').Product
const route = require('express').Router()

route.get('/', (req, res) =>{
    //Get all products
    Product.findAll()
        .then((products) => {
            res.status(200).send(products) 
        })
        .catch((err) => {
            res.status(500).send({
               error: "Could not retreive products"
            })
        })

})

route.post('/', (req,res) => {
    if(isNaN(req.body.price)) {
        return res.status(403).send({            //return keyword here ensures that if the "if" condition is not valid the rest of the program will not be executed
            error: "Price is not a valid number"
        })
    }
    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: req.body.price,   /* in post request every data goes as a string so req.body.price will automatically 
        convert into a string so to keep it in float parseFloat is used */    
    }).then((products) => {
            res.status(201).send(products)
    }).catch((err) => {
            res.status(501).send({
               error: "Could not add new Product"
        })
    })
})


   

exports = module.exports = route