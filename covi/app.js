const express = require('express');
const app = express();
const { open } = require('sqlite');
const path = require('path');
const sqlite3 = require('sqlite3');
app.use(express.json());

const dbPath = path.join(__dirname, 'covid.db');
let db = null;

const initDbServer = async () => {
    try {
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        });
        app.listen(5200, () => { console.log('Server running at http://localhost:5200/'); });
    } catch (err) {
        console.error(`Error initializing database: ${err.message}`);
        process.exit(1);
    }
};

initDbServer();

app.get('/states/', async (req, res) => {
    try {
        const query = 'SELECT * FROM state';
        const data = await db.all(query);
        res.status(200).json(data);
    } catch (err) {
        console.error(`Error fetching states: ${err.message}`);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/states/:stateId/', async (req, res) => {
    const { stateId } = req.params
    try {
        const query = `SELECT * FROM state where state_id=${stateId}`;
        const data = await db.all(query);
        res.status(200).json(data);
    } catch (err) {
        console.error(`Error fetching states: ${err.message}`);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/districts/', async (req, res) => {
    try {
        const bodydata = req.body
        const { districtName, stateId, cases, cured, active, deaths } = bodydata
        const qwery = `insert into District (district_name,state_id,cases,cured,active,deaths) values ('${districtName}',${stateId},${cases},${cured},${active},${deaths});`
        const ans = await db.run(qwery)
        res.send('District Successfully Added')

    }
    catch (e) {
        console.log(e)
    }
})

app.get('/districts/:districtId/', async (req, res) => {
    const { districtId } = req.params
    try {
        const qry = `select * from District where district_id=${districtId}`
        const data = await db.all(qry)
        res.send(data)
    }
    catch (e) { console.log(e) }
})


app.put('/districts/:districtId/', async (req, res) => {
    const { districtId } = req.params
    const bodydata = req.body
    const { districtName, stateId, cases, cured, active, deaths } = bodydata
    // console.log(bodydata)
    try {
        const qwery = `update District set district_name='${districtName}',state_id=${stateId},cases=${cases},cured=${cured},active=${active},deaths=${deaths} where district_id=${districtId};`
        const data = await db.run(qwery)
        res.send("District Details Updated")
    }
    catch (e) { console.log(e) }
})

app.get('/states/:stateId/stats/', async (req, res) => {
    const { stateId } = req.params
    console.log(stateId)
    try {
        const qry = `SELECT SUM(cases) as total_cases, SUM(cured) as total_cured, SUM(active) as total_active, SUM(deaths) as total_deaths FROM District inner join state on District.state_id=state.state_id WHERE state.state_id=${stateId}`
        const data = await db.all(qry)
        res.send(data)
    } catch (err) {
        console.error(`Error fetching stats: ${err.message}`);
        res.status(500).send('Internal Server Error');
    }

})

app.get('/districts/:districtId/details/', async (req, res) => {
    const { districtId } = req.params
    // console.log(stateId)
    try {
        const qry = `select state_name from District inner join state on District.state_id=state.state_id WHERE District.district_id=${districtId}`
        const data = await db.all(qry)
        res.send(data)
    } catch (err) {
        console.error(`Error fetching stats: ${err.message}`);
        res.status(500).send('Internal Server Error');
    }

})

