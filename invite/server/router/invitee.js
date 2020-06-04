const express = require('express')

const router = express.Router()

// will be sending user obj to either going or not going...
const userState = {
 
 going: [],
 notgoing: []
}


// generates a random user from the api
router.get( '/', (req, res, next) => {
    axios.get('https://randomuser.me/api/').then(resp =>{
        res.json(resp.data) 
    })  
})




// router will be LISTENING to send to the server??

router.get('/going', (req, res, next) => {
    res.send(going)
})

router.get('/notgoing', ( req, res, next) => {
    res.send(notgoing)
})

module.exports = router

