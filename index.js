const express = require('express')
const server = express()
const port = 4000

const postRouter = require('./router/post-router')


server.use(express.json())
server.use('/api/posts',postRouter)



server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})