const user = require('./userDb.json')

let globalIdUser = user[user.length-1].id +1

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

    
};