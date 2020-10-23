const express = require('express')
const app = express()

const port = 3000;

app.use(express.static('public'))
app.use(express.json())

app.set('view engine', 'html');


app.get('/', (req, res)=> {
	res.render('index')
})

app.listen(port, () => {
	console.log(`listening on ${port}`)
})