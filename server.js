const express = require('express')
const app = express()
const port = 3000

app.get('/', express.static(__dirname))
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/images', express.static('images'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

