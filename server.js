const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 5000
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })

app.prepare().then(() => {
    const server = express()
  
    server.all('*', (req, res) => {
      return handle(req, res)
    })
  
    server.listen(port,'0.0.0.0', err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })