const express = require('express')
const cors = require('cors')
const port = process.env.PORT
const sequelize = require('./db/sequelize')
const messageRouter = require('./routers/messageRouter')
const app = express()

app.use(cors())
app.use(express.json())
app.use(messageRouter)

//first we sync to the sql db
sequelize.sync()
    .then(() => {
        app.listen(port, () => {
            console.log("Server connected,port:", port)
        })
    }).catch(err => console.log(err));
