const express = require('express')
const heros = require('../heros/herosModel')
const Heros = require('../heros/herosModel')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json('hello')
})

server.get('/heros', async(req, res)=> {
    Heros.getAll() 
        .then(heros => {
            res.status(200).json(heros)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

server.post('/heros', async(req, res) => {
    Heros.add(req.body)
        .then(newHero =>{
            res.status(200).json(newHero)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

server.delete('/heros/:id', async(req, res) => {
    const {id} = req.params
    Heros.remove(id)
    .then(delted => {
        res.status(200).json(delted)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})



module.exports = server