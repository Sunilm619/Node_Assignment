const express = require('express')
const app = express()
const { open } = require('sqlite')
const path = require('path')
const sqlite3 = require('sqlite3')
app.use(express.json())
const dbpath = path.join(__dirname, 'moviesData.db')
let db = null
app.use(express.json())
const initdbserver = async () => {
    try {
        db = await open({
            filename: dbpath,
            driver: sqlite3.Database
        })
        app.listen(5000, () => { console.log('srver at 5000'); });
    }

    catch (err) {
        console.error(`Error initializing database: ${err.message}`)
    }
}


initdbserver()
app.get('/movies/', async (req, res) => {
    try {
        const qurt = `select * from Movie`
        const data = await db.all(qurt)
        res.send(data)

    }
    catch (err) {
        console.log(err)
    }

})

app.post('/movies/', async (req, res) => {
    try {
        const bodydata = req.body
        const qwery = `insert into Movie (director_id,movie_name,lead_actor) values (${bodydata.directorId},'${bodydata.movieName}','${bodydata.leadActor}');`
        const ans = await db.run(qwery)
        res.send('Movie added successfully')

    }
    catch (e) {
        console.log(e)
    }
})

app.get('/movies/:movieId/', async (req, res) => {
    const { movieId } = req.params
    try {
        const qry = `select * from Movie where movie_id=${movieId}`
        const data = await db.get(qry)
        res.send(data)
    }
    catch (e) { console.log(e) }
})

app.put('/movies/:movieId/', async (req, res) => {
    const { movieId } = req.params
    const bodydata = req.body
    const { directorId, movieName } = bodydata
    console.log(bodydata)
    try {
        const qry = `update Movie set director_id=${directorId},movie_name='${movieName}' where movie_id=${movieId}`
        const data = await db.run(qry)
        res.send("Movie update Success")
    }
    catch (e) { console.log(e) }
})


app.delete('/movies/:movieId/', async (req, res) => {
    const { movieId } = req.params
    try {
        const qry = `delete from Movie where movie_id=${movieId}`
        const data = await db.get(qry)
        res.send("Movie deleted")
    }
    catch (e) { console.log(e) }
})

app.get('/directors/', async (req, res) => {
    try {
        const qurt = `select * from Director`
        const data = await db.all(qurt)
        res.send(data)

    }
    catch (err) {
        console.log(err)
    }

})

app.get('/directors/:directorId/movies/', async (req, res) => {
    const { directorId } = req.params
    // console.log(directorId)
    try {
        const qurt = `select movie_name from Director Inner Join Movie on Director.director_id=Movie.director_id where Director.director_id=${directorId}`
        const data = await db.all(qurt)
        res.send(data)

    }
    catch (err) {
        console.log(err)
    }

})