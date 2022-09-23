const cors = require('cors');
const authRoutes = require('./auth/auth.routes');
const productsRoutes = require('./products/products.routes');
const brandRoutes = require('./brands/brands.routes')
const express = require('express');
const properties = require('./config/properties');
const DB = require('./config/db')

DB();

const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
const bodyParserJSON = bodyParser.json()
const bodyParserUrlEncoded = bodyParser.urlencoded({extended : true})

app.use(bodyParserJSON);
app.use(bodyParserUrlEncoded);

app.use(cors());

app.use('./api', router);
authRoutes(router);

app.use('./api', router);
productsRoutes(router)

app.use('./api', router);
brandRoutes(router)


app.use(router)


app.listen(3000);