const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000;

app.use(cors())

app.get('/user/:id', function (req, res) {
    // const q = req.params
    // console.log(q.id)
    const q = req.query
    console.log(q.q)
    console.log(q.name)
    console.log(q.age)

    res.json({'userid': q.q})
})

app.get('/asset/:condition', function (req, res) {
    const { condition } = req.params

    if (condition == "inflation_eco_good") {
        res.send({ 'asset': 'stock, real asset' })
    } else if (condition == "inflation_eco_bad") {
        res.send({ 'asset': 'real asset' })
    } else if (condition == "deflation_eco_good") {
        res.send({ 'asset': 'stock, bond' })
    } else if (condition == "deflation_eco_bad") { 
        res.send({ 'asset': 'stock?, bond, real asset?' })
    } else {   
        res.send({ 'asset': 'n/a' })
    }
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})