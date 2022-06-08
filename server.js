const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const player = {
    'luka doncic': {
        'birthPlace': 'Ljubljana, Slovenia',
        'height': '6 ft, 7 in',
        'careerStart': 2015,
        'position': 'Point Guard, Shooting Guard',
        'quote': "Everybody acts tough when they're up.",
        'funFact': 'He can speak four languages - Slovenian, Serbian, English, and Spanish.' 
    },
    'giannis antetokounmpo': {
        'birthPlace': 'Athens, Greece',
        'height': '6 ft, 11 in',
        'careerStart': 2013,
        'position': 'Point Forward, Center',
        'quote': "What do you call a cow on the floor? Anybody know? Ground beef.",
        'funFact': 'His nickname is the "Greek Freak".' 
    },
    'unknown': {
        'birthPlace': 'unknown',
        'height': 'unknown',
        'careerStart': 0,
        'position': 'unknown',
        'quote': 'unknown',
        'funFact': 'unknown' 
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const playerName = request.params.name.toLowerCase()
    if(player[playerName]){
        response.json(player[playerName])
    }else{
        response.json(player['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}`)
})