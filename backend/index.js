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
// Brands
app.get('/niks/brands', async (req, res) => {
    try {
        let data = await pool.query('SELECT * FROM brands');
        res.json(data.rows);
    } catch (error) {
        console.log(error)
    }
});

app.get('/niks/products/:sectionName', async (req, res) => {
    let sectionName = req.params.sectionName;
    try {
        let data = "";
        if(sectionName == "All Products" || sectionName == "") {
            data = await pool.query('SELECT * FROM cleanser UNION SELECT * FROM moisturizer UNION SELECT * FROM exfoliant UNION SELECT * FROM tst UNION SELECT * FROM spf;');
        } else if(sectionName == "Cleansers") {
            data = await pool.query("SELECT * FROM cleanser;");
        } else if(sectionName == "Moisturizers") {
            data = await pool.query("SELECT * FROM moisturizer;");
        } else if(sectionName == "Exfoliators") {
            data = await pool.query("SELECT * FROM exfoliant;");
        } else if(sectionName == "Treatments, Toners & Serums") {
            data = await pool.query("SELECT * FROM tst;");
        } else if(sectionName == "SPF") {
            data = await pool.query("SELECT * FROM spf;");
        }
        res.json(data.rows);
    } catch (error) {
        console.log(error)
    }
});


app.get('/niks/products/type/:type', async (req, res) => {
    const type = '%' +  req.params.type + '%';
    try {
        let data = await pool.query("SELECT * FROM (SELECT * FROM cleanser UNION SELECT * FROM moisturizer UNION SELECT * FROM exfoliant UNION SELECT * FROM tst UNION SELECT * FROM spf) AS products WHERE products.skin_types LIKE $1 OR products.skin_types = 'all';", [type]);
        res.json(data.rows);
    } catch (error) {
        console.log(error)
    }
});


app.get('/niks/products/concerns/:concern', async (req, res) => {
    let concern = req.params.concern;
    if (concern == "medical") {
        concern = '%skin conditions%';
    } else if(concern == "texture") {
        concern = '%skin texture%';
    } else if(concern == "pigmentation") {
        concern = '%skin tone%';
    } else {
        concern = '%' +  concern + '%';
    }
    try {
        let data = await pool.query("SELECT * FROM (SELECT * FROM cleanser UNION SELECT * FROM moisturizer UNION SELECT * FROM exfoliant UNION SELECT * FROM tst UNION SELECT * FROM spf) AS products WHERE products.skin_concerns LIKE $1;", [concern]);
        res.json(data.rows);
    } catch (error) {
        console.log(error)
    }
});

//Filtering
app.get('/niks', async (req, res) => {
    let products = req.query.products.split(",");
    for( let i = 0; i < products.length; i++) {
        products[i] = '%' +  products[i] + '%';
    }
    
    let types = req.query.types.split(",");
    for( let i = 0; i < types.length; i++) {
        types[i] = '%' +  types[i] + '%';
    }
    types[types.length] = 'all';
    
    let concerns = req.query.concerns.split(",");
    for( let i = 0; i < concerns.length; i++) {
        concerns[i] = '%' +  concerns[i] + '%';
    }

    let preferences = req.query.preferences.split(",");
    let vegan = [true, false];
    let cruelty_free = [true, false];
    let fragrence_free = [true, false];
    if(preferences != "") {
        for( let i = 0; i < preferences.length; i++) {
            if (preferences[i] == "vegan") {
                vegan = [true];
            } else if (preferences[i] == "cruelty-free") {
                cruelty_free = [true];
            } else if (preferences[i] == "fragrance-free") {
                fragrence_free = [true];
            }
        }
    }

    let brands = req.query.brands.split(",");
    for( let i = 0; i < brands.length; i++) {
        brands[i] = '%' +  brands[i] + '%';
    }
    
    console.log(JSON.stringify(req.query))
    console.log(products, types, concerns, vegan, cruelty_free, fragrence_free, brands)

    try {
        let data = await pool.query("SELECT * FROM (SELECT * FROM cleanser UNION SELECT * FROM moisturizer UNION SELECT * FROM exfoliant UNION SELECT * FROM tst UNION SELECT * FROM spf) AS products WHERE products.id LIKE ANY($1) AND products.skin_types LIKE ANY($2) AND products.skin_concerns LIKE ANY($3) AND products.vegan = ANY($4) AND products.cruelty_free = ANY($5) AND products.fragrence_free = ANY($6) AND products.brand LIKE ANY($7);", [products, types, concerns, vegan, cruelty_free, fragrence_free, brands]);
        res.json(data.rows);
    } catch (error) {
        console.log(error)
    }
});

// Product description
app.get('/niks/product/:productId', async (req, res) => {
    const {productId} = req.params;

    try {
        let data = await pool.query("SELECT * FROM (SELECT * FROM cleanser UNION SELECT * FROM moisturizer UNION SELECT * FROM exfoliant UNION SELECT * FROM tst UNION SELECT * FROM spf) AS products WHERE products.id = $1", [productId]);
        res.json(data.rows);
    } catch (error) {
        console.log(error)
    }
});

// Product Retailer Links
app.get('/niks/buy/:productId', async (req, res) => {
    const {productId} = req.params;
    try {
        let data = await pool.query("SELECT * FROM buy WHERE product_id =  $1", [productId]);
        res.json(data.rows);
    } catch (error) {
        console.log(error)
    }
});

// Similar Products
app.get('/niks/similar/:type/:concerns', async (req, res) => {
    const concerns = req.params.concerns.split(", ");
    for( let i = 0; i < concerns.length; i++) {
        concerns[i] = '%' + concerns[i] + '%';
    }
    const type = '%' + req.params.type;
    try {
        let data = await pool.query("SELECT * FROM (SELECT * FROM cleanser UNION SELECT * FROM moisturizer UNION SELECT * FROM exfoliant UNION SELECT * FROM tst UNION SELECT * FROM spf) AS products WHERE products.skin_concerns LIKE ANY($1) AND products.id LIKE $2::varchar LIMIT 4;", [concerns, type]);
        res.json(data.rows);
    } catch (error) {
        console.log(error)
    }
});

// Quiz Results
app.get('/niks/results/:concern/:type/:product', async (req, res) => {
    const concern = '%' + req.params.concern + '%';
    let type = '%' + req.params.type + '%';
    const product = req.params.product;
    const limit = req.query?.limit;

    type = [type, 'all'];

    try {
        let data = "";
        if(product == "c") {
            data = await pool.query("SELECT * FROM cleanser WHERE skin_concerns LIKE $1 AND skin_types LIKE ANY($2) LIMIT $3;", [concern, type, limit]);
        } else if(product == "m") {
            data = await pool.query("SELECT * FROM moisturizer WHERE skin_concerns LIKE $1 AND skin_types LIKE ANY($2) LIMIT $3;", [concern, type, limit]);
        } else if(product == "e") {
            data = await pool.query("SELECT * FROM exfoliant WHERE skin_concerns LIKE $1 AND skin_types LIKE ANY($2) LIMIT $3;", [concern, type, limit]);
        } else if(product == "t") {
            data = await pool.query("SELECT * FROM tst WHERE skin_concerns LIKE $1 AND skin_types LIKE ANY($2) LIMIT $3;", [concern, type, limit]);
        } else if(product == "s") {
            data = await pool.query("SELECT * FROM spf WHERE skin_concerns LIKE $1 AND skin_types LIKE ANY($2) LIMIT $3;", [concern, type, limit]);
        }
        res.json(data.rows);
    } catch (error) {
        console.log(error)
    }
});

//Starting the server
app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });