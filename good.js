const express = require('express')
const ExpressGraphQL = require('express-graphql')
const schema = require('./src/schema')

const goodyGoodApp = express()

goodyGoodApp.use('/gigi', ExpressGraphQL({
    graphiql: true,
    schema
}))

goodyGoodApp.get('/', (req, res) => {
    res.send(`Something am!!!!!!!!!!`)
})
const myAwesomeCustomPort = 2345
//                  port
// http://localhost:3000
goodyGoodApp.listen(myAwesomeCustomPort, () => {
    console.log(`I'm listening on a port: ${myAwesomeCustomPort}`)
})
