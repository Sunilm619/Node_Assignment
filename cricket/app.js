const express = require('express')
const { open } = require('sqlite')
const path = require('path')
const app = express()
app.use(express.json())
const sqlite3 = require('sqlite3')
const dbpath = path.join(__dirname, 'cricketTeam.db')

let db = null

const initdbandserver = async () => {
    try {
        db = await open({
            filename: dbpath,
            driver: sqlite3.Database
        });

        app.listen(4000, () => {
            console.log(`Server is running on port 400`)  // server started on port 4000
        })
    }
    catch (err) {
        console.error(`Error initializing database: ${err.message}`)
        process.exit(1)
    }

}

initdbandserver()

app.get('/players/', async (req, res) => {
    const quer = `select * from cricket_team`
    const data = await db.all(quer)
    res.send(data)


})

app.get('/players/:playerId/', async (req, res) => {
    const { playerId } = req.params
    const querry = `select * from cricket_team where player_id='${playerId}';`
    const data = await db.get(querry)
    res.send(data)
    // console.log(req.params)
})

app.put('/players/:playerId/', async (req, res) => {
    const { playerId } = req.params
    const bodydata = req.body
    // console.log(bodydata)
    const querry = `update cricket_team set jersey_number=${bodydata.jersey} where player_id='${playerId}';`
    const data = await db.run(querry)
    res.send("Player Details Updated")
    // console.log(req.params)
})

app.delete('/players/:playerId/', async (req, res) => {
    const { playerId } = req.params
    // console.log(bodydata)
    const querry = `delete from cricket_team where player_id='${playerId}';`
    const data = await db.run(querry)
    res.send("Player Delted Updated")
    // console.log(req.params)
})

app.post('/players/', async (req, res) => {
    const bodydata = req.body
    console.log(bodydata)
    const { playerName, jerseyNumber, role } = bodydata
    const querry = `insert into cricket_team (player_name,jersey_number,role) values ('${playerName}',${jerseyNumber},'${role}');`
    const data = await db.run(querry)
    res.send(`Player Added to Team`)
})