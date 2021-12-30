import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import schema from './schema'
import {connect} from './database'

// init
const app = express()
const PORT =  process.env.PORT || 3000
connect()


// route
app.get('/', (req, res)=>{
    res.send('Hola mundo')
})

// root

const root = { hello: () => 'Hello world!' }

// middleware
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
    context: {
        messageid: 'test'
    }
  }))

// listen
app.listen(PORT, ()=> {
    console.log(`Server on port ${PORT}`)
})