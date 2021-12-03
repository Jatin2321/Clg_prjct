
const User = require('../../db').User
const route = require('express').Router()



route.get('/', (req, res) => {
    //We want to send an array of all user
    //From our database here

    User.findAll()
        .then((users) => {
            res.status(200).send(users)
        })
        .catch((err) => {
            res.status(500).send({
                error:"Could not retreive users"
            })
        })

})
route.post('/', (req,res) => {
    User.create({
        name: req.body.name
    }).then((users) => {
        res.status(201).send(users)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new User"
        })
    })
})

exports = module.exports = route


