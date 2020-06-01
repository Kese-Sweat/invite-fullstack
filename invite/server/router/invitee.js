const express = require('express')

const router = express.Router()

// will be sending user obj to either going or not going...
const userState = {
 users = {},
 going = [],
 notgoing = []
}
// generates me a random user from the api
axios.get('https://randomuser.me/api/').then(resp =>{
    return (resp.data)
})

// router will be LISTENING to send to the server??
router.get('/', (req, res, next) => {
  res.send('Hello world!')
})

router.get('/going', (req, res, next) => {
    res.send(going)
})

router.get('/notgoing', ( req, res, next) => {
    res.send(notgoing)
})

module.exports = router