const tape = require('tape')
const jsonist = require('jsonist')

const PORT = process.env.PORT = process.env.PORT || require('get-PORT-sync')()
const server = require('./server')

const urlBase = `http://localhost:${PORT}`

tape('should respond hello', (t) => {
  jsonist.get(urlBase, (err, body) => {
    if (err) t.error(err)

    t.equal(body.msg, 'hello')
    t.end()
  })
})

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> d3cb144 (feat: add base64 endpoint)
tape('should respond b64', (t) => {
  jsonist.get(`${urlBase}/b64/hello`, (err, body) => {
    if (err) t.error(err)

    t.equal(body.b64, 'aGVsbG8=')
<<<<<<< HEAD
=======
tape('should respond user-agent', (t) => {
  const opts = { headers: { 'User-Agent': 'tape' } }
  jsonist.get(`${urlBase}/user-agent`, opts, (err, body) => {
    if (err) t.error(err)

    t.equal(body.ua, 'tape')
>>>>>>> 9f8c73a (feat: add user-agent endpoint)
=======
>>>>>>> d3cb144 (feat: add base64 endpoint)
    t.end()
  })
})

<<<<<<< HEAD
>>>>>>> 43cd5b2 (feat: add user-agent endpoint)
=======
>>>>>>> d3cb144 (feat: add base64 endpoint)
tape('cleanup', function (t) {
  server.close()
  t.end()
})
