const express = require('express')
const app = express()
const morgan = require('morgan')

//Setting
app.set('port', process.env.PORT || 4000 )
app.set('json spaces', 2)

//Middleware
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))

//routes
app.use(require('./routes/index'))
app.use('/api/movies',require('./routes/movies'))
app.use('/api/users', require('./routes/users'))



//Start Server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`)
    
})

