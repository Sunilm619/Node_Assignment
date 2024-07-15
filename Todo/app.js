const { format } = require("date-fns/format");
const express = require('express');
const app = express();
app.use(express.json());
const path = require('path');
const dbpath = path.join(__dirname, 'todoApplication.db')
const { open } = require('sqlite');
const sqlite3 = require('sqlite3');


let db;
initdbnserver = async () => {
    try {
        db = await open({
            filename: dbpath,
            driver: sqlite3.Database
        });
        app.listen(3000, () => {
            console.log('Server running on port 3000');
        })
    }
    catch (error) {
        console.log(`Error connecting to database: ${error.message}`);
        process.exit(1);
    }
}
initdbnserver()

//scenario1
app.get('/todos/scene1', async (req, res) => {
    try {
        const qreyparam = (req.query.status);
        console.log(qreyparam);
        const quer = `select * from todo where status='${qreyparam}'`
        const data = await db.all(quer)
        res.send(data);

    }
    catch (error) {
        console.error('Error fetching todos:', error);
        res.status(400).send('Invalid Todo Status');
    }

})


//scenario2
app.get('/todos/scene2', async (req, res) => {
    try {
        const qreyparam = (req.query.priority);
        console.log(qreyparam);
        const quer = `select * from todo where priority='${qreyparam}';`
        const data = await db.all(quer)
        res.send(data);

    }
    catch (error) {
        console.error('Error fetching todos:', error);
        res.status(400).send('Invalid priority Status');
    }

})


//scenario3
app.get('/todos/scene3', async (req, res) => {
    try {
        const priority = (req.query.priority);
        const status = req.query.status;
        console.log(status, priority);
        const quer = `select * from todo where (status='${status}' and priority='${priority}')`
        const data = await db.all(quer)
        res.send(data);

    }
    catch (error) {
        console.error('Error fetching todos:', error);
        res.status(400).send('Invalid Todo Status');
    }

})


//scenario4
app.get('/todos/scene4', async (req, res) => {
    try {
        const searchquery = req.query.search_q
        // console.log(searchquery);
        const quer = `select * from todo where data like '%${searchquery}%';`
        const data = await db.all(quer)
        res.send(data);

    }
    catch (error) {
        console.error('Error fetching todos:', error);
        res.status(400).send('Invalid priority Status');
    }

})

//scenario5
app.get('/todos/scene5', async (req, res) => {
    try {
        const category = (req.query.category);
        const status = req.query.status;
        console.log(status, category);
        const quer = `select * from todo where (status='${status}' and category='${category}')`
        const data = await db.all(quer)
        res.send(data);
    }
    catch (error) {
        console.error('Error fetching todos:', error);
        res.status(400).send('Invalid Todo Status');
    }

})


//scenario6
app.get('/todos/scene6', async (req, res) => {
    try {
        const category = req.query.category
        // console.log(searchquery);
        const quer = `select * from todo where category='${category}';`
        const data = await db.all(quer)
        res.send(data);

    }
    catch (error) {
        console.error('Error fetching todos:', error);
        res.status(400).send('Invalid priority Status');
    }
})

//scenario7
app.get('/todos/scene7', async (req, res) => {
    try {
        const category = (req.query.category);
        const priority = req.query.priority;
        // console.log(status, category);
        const quer = `select * from todo where (priority='${priority}' and category='${category}')`
        const data = await db.all(quer)
        res.send(data);
    }
    catch (error) {
        console.error('Error fetching todos:', error);
        res.status(400).send('Invalid Todo Status');
    }

})

//API 2 http://localhost:3000/todos/:3
app.get('/todos/:todoId/', async (req, res) => {
    const { todoId } = req.params;
    const query = `SELECT * FROM todo WHERE id = ${todoId}`;
    const data = await db.get(query)
    res.send(data);
})



app.get('/agenda/', async (req, res) => {
    const datereq = req.query;
    console.log(datereq);
    let formatdate = format(new date(datereq), 'yyyy-MM-dd')
    console.log(formatdate);


    // const query = `SELECT * FROM todo WHERE id = ${todoId}`;
    // const data = await db.get(query)
    // res.send(data);
})

//POST
app.post('/todos/', async (req, res) => {
    try {
        const { data, priority, status, category } = req.body;
        const insertQuery = `INSERT INTO todo (data, priority, status, category) VALUES ('${data}', '${priority}', '${status}', '${category}')`;
        await db.run(insertQuery);
        res.status(201).send('Todo added successfully');
    }
    catch (error) {
        console.error('Error adding todo:', error);
        res.status(400).send('Invalid todo data');
    }
})

//Delete

app.delete('/todos/:todoId/', async (req, res) => {
    const { todoId } = req.params;
    const deleteQuery = `DELETE FROM todo WHERE id = ${todoId}`;
    try {
        await db.run(deleteQuery);
        res.status(200).send('Todo deleted successfully');
    }
    catch (error) {
        console.error('Error deleting todo:', error);
        res.status(400).send('Invalid todo id');
    }
})

//UPDATE


app.put('/todos/:todoId/', async (req, res) => {
    const bodydata = req.body;
    const { todoId } = req.params;
    const { data, priority } = bodydata
    console.log(bodydata);
    try {
        const qury = `update todo set data='${data}',priority='${priority}' where id=${todoId}`;
        const answse = await db.run(qury);
        res.send("Updated todo");

    }
    catch (error) {
        console.error('Error updating todo:', error);
        res.status(400).send('Invalid todo data');
    }
})