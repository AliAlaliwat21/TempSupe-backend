const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const dns = require("node:dns");
// DNS workaround for MongoDB Atlas.
// Remove these two lines if your regular DNS works correctly.
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const PORT = process.env.PORT ? process.env.PORT : "3000"

const authCtrl = require('./controllers/auth')
const usersCtrl = require('./controllers/users')
const heroCtrl = require('./controllers/heroes')
const requestCtrl = require('./controllers/requests')

const verifyToken = require('./middleware/verify-token')

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', async () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}. 🥭`)
  await heroCtrl.initializeHeroes()
})

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// Routes go here
// app.get('/auth/sign-token', authCtrl.signToken)
// app.get('/auth/verify-token', authCtrl.verifyToken)
app.post('/auth/sign-up', authCtrl.signUp)
app.post('/auth/sign-in', authCtrl.signIn)
app.get('/users', verifyToken, usersCtrl.index)


// Hero routes
app.get('/heroes', verifyToken, heroCtrl.index)
app.get('/heroes/:heroId', verifyToken, heroCtrl.show)


//Review routes
app.post('/heroes/:heroId/reviews', verifyToken, heroCtrl.createReview)
app.put('/heroes/:heroId/reviews/:reviewId', verifyToken, heroCtrl.updateReview)
app.delete('/heroes/:heroId/reviews/:reviewId', verifyToken, heroCtrl.deleteReview)


//Request routes
app.post('/service-requests', verifyToken, requestCtrl.createRequest)
app.get('/service-requests', verifyToken, requestCtrl.index)
app.get('/service-requests/:requestId', verifyToken, requestCtrl.showRequest)
app.delete('/service-requests/:requestId', verifyToken, requestCtrl.deleteRequest)
app.put('/service-requests/:requestId', verifyToken, requestCtrl.updateRequest)

app.listen(PORT, () => {
  console.log(`The express app is ready on port ${PORT}! 😀`)
})