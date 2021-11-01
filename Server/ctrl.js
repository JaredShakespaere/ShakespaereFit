const raze = require('./razedb.json')
const user = require('./userDb.json')
const cart = require('./cartDb.json')

let globalIdCart = cart[cart.length-1].id +1
let globalIdUser = newUser[newUser.length-1].id +1

module.exports = {
    addUser: (req, res) => {
        const {name, phoneNumber, email, 
            goals, importantToReachGoal, 
            fullyPresent, additionalInfo} = req.body

        let newUser = {
            name,
            phoneNumber, 
            email, 
            goals: 'fitness goals',
            importantToReachGoal: Int,
            fullyPresent: Boolean,
            additionalInfo: 'String'
        } 

        user.push(newUser)
        globalIdUser++

        res.status(200).send(user)
    },

    addItemToCart: (req, res) => {
        const {name, price, description} = req.body

        let newCartItem = {
            name, 
            price, 
            description: 'description'
        }

        cart.push(newCartItem)
        globalIdCart++

        res.status(200).send(cart)
    }, 

    deleteFromCart: (req, res) => {
        const {id} = req.params
        let index = cart.findIndex((elem) => +elem.id === +id)
        cart.splice(index, 1)
        res.status(200).send(cart)
    }
}