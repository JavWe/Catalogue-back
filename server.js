const authRoutes = require('./auth/auth.routes')
const express = require('express');
const properties = require('./config/properties');
const DB = require('./config/db')

DB();

const app = express();
const router = express.Router();


app.use('./api', router);
authRoutes(router);

router.get('/', (req,res)=>{
    res.send('Hello World')
})

app.use(router)
app.listen(3000,()=> console.log('Server running on port 3000'));