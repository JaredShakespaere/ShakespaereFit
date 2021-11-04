const user = require('./userDb.json')
const raze = require('./shopDb.json')

let globalIdUser = user[user.length-1].id +1

module.exports = {
    addUser: (req, res) => {
        console.log('hit')
        const {name, phoneNumber, email, 
            goals, importantToReachGoal, 
            fullyPresent, additionalInfo} = req.body

        let newUser = {
            name,
            phoneNumber, 
            email, 
            goals,
            importantToReachGoal,
            fullyPresent,
            additionalInfo,
        } 

        user.push(newUser)
        globalIdUser++

        res.status(200).send(user)
    },

    

    
};

