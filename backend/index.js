//Importing express and cors
const express = require('express');
const cors = require('cors');
const pool = require('./db');
var pg = require('pg');

//Creating an Express application
const app = express();

app.use(cors());
app.use(express.json());


// Creating a GET route
app.get('/niks', async (req, res) => {
    try {
        let data = await pool.query('SELECT * FROM cleanser UNION SELECT * FROM moisturizer UNION SELECT * FROM exfoliant UNION SELECT * FROM tst UNION SELECT * FROM spf;');
        // await pool.end()
        res.json(data.rows);
    } catch (error) {
        console.log(error)
    }
});

app.get('/niks/product/:productId', async (req, res) => {
    const {productId} = req.params;
    try {
        let data = await pool.query("SELECT * FROM (SELECT * FROM cleanser UNION SELECT * FROM moisturizer UNION SELECT * FROM exfoliant UNION SELECT * FROM tst UNION SELECT * FROM spf) AS products WHERE products.id = $1", [productId]);
        // await pool.end()
        res.json(data.rows);
    } catch (error) {
        console.log(error)
    }
});

app.get('/niks/:type', async (req, res) => {
    const concerns = req.params.concerns;
    for( let i = 0; i < concerns.length; i++) {
        concerns[i] = '%' + concerns[i] + '%';
     }
    const type = '%' + req.params.type;
    try {
        let data = await pool.query("SELECT * FROM (SELECT * FROM cleanser UNION SELECT * FROM moisturizer UNION SELECT * FROM exfoliant UNION SELECT * FROM tst UNION SELECT * FROM spf) AS products WHERE products.skin_concerns LIKE '%skin tone%' products.id LIKE $1 LIMIT 4;", [type]);
        // await pool.end()
        res.json(data.rows);
    } catch (error) {
        console.log(error)
    }
});

app.get('/niks/brands', async (req, res) => {
    try {
        let data = await pool.query('SELECT * FROM brands');
        // await pool.end()
        res.json(data.rows);
    } catch (error) {
        console.log(error)
    }
});

app.get('/niks/buy', async (req, res) => {
    try {
        let data = await pool.query("SELECT * FROM buy WHERE product_id = '4c'");
        // await pool.end()
        res.json(data.rows);
    } catch (error) {
        console.log(error)
    }
});

//Starting the server
app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });