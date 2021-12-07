const express = require('express')
const path = require('path') //node native module
const { Waiter } = require('./models/Waiter')

const app = express()
const port = 3000

//points toward folder of static files
app.use(express.static(path.join(__dirname, 'public')))

//GET method on /flipcoin route responds with heads or tails
// app.get('/flipcoin', (req, res) => {
//     let coinflip = Math.floor(Math.random()*2)
//     if (coinflip == 1){
//         coinflip = 'Heads'
//     } else {
//         coinflip = 'Tails'
//     }
//     res.send(coinflip)
// })

//GET method on /restaurants route returns all restaurants
app.get('/waiters', async (req,res) => {
    //find all instances of the Model Restaurant
    const allWaiters = await Waiter.findAll()
    console.log(req)
    //respond with allRestaurants as a json objeect
    res.json(allWaiters)
})
app.get('/waiters-id/:id', async (req,res) => {
    //find one specific instance of the Musician model by id
    const thiswaiters = await Waiter.findByPk(req.params.id)
    //respond with allMusicians as an array of json objects
    res.json(thiswaiters)
})

app.get('/waiters-name/:name,:salary', async (req,res) => {
    //find one specific instance of the Musician model by id
    const thiswait = await Waiter.findOne({where:({waiter_name: req.params.name}  &&
                                                  {waiter_salary: req.params.salary})
                                          }
                                         )
    //respond with allMusicians as an array of json objects
    res.json(thiswait)
})

app.get('/waiters-salary/:salary', async (req,res) => {
    //find one specific instance of the Musician model by id
    const thissalary = await Waiter.findOne({where:{waiter_salary: req.params.salary}})
    //respond with allMusicians as an array of json objects
    res.json(thissalary)
})
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})