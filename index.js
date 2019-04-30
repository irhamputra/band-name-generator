const express = require('express');
const path = require('path');
const cors = require('cors');
var generate = require('project-name-generator');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());

// serve a static page
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/band-names', (req, res) => {
		const arrBandNames = generate({words: 2, alliterative: true}).spaced;
		
		res.json(arrBandNames);
});

// match all path return to index.html
app.use('*', (req, res) => {
		 res.sendFile(path.join(__dirname + '/client/build/index.html'))
});

// app listen
app.listen(PORT, () => {
		console.log(`Server is running on port http://localhost:${PORT}`)
});
