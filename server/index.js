const express = require('express')

const sequelize = require('./utils/database')
const controller = require('./controllers/reviews')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.get('/:name', controller.getReviews)
app.post('/add', controller.addReview)

sequelize.sync().then(()=>{
    console.log('Database connected')
})
.catch(err => console.log("err",err))


app.listen(5000)