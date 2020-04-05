const express = require('express')
const morgan = require('morgan'); // middleware and used for log
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const passport = require('passport')


const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(passport.initialize())

require('./passport')(passport)

app.use('/api/users',  require('./routers/userRoute'))
app.use('/api/transactions', require('./routers/TransactionRoute'))

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to money management app'
    })
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
    mongoose.connect('mongodb://localhost:27017/money-management-app',
        { useNewUrlParser: true },
        () => {
            console.log('database connected')
        });
})