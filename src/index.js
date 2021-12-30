import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'

// init
const app = express()
const PORT =  process.env.PORT || 3000


// route
app.get('/', (req, res)=>{
    res.send('Hola mundo')
})

// schema
const schema = buildSchema(`
    type Query {
    hello: String
    }
`)

// root

const root = { hello: () => 'Hello world!' }

// middleware
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }))

// listen
app.listen(PORT, ()=> {
    console.log(`Server on port ${PORT}`)
})