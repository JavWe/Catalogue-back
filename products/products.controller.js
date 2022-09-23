const Product = require('./products.dao')



function getAll(req, res) {
    Product.find({})
        .then(products => {
            res.send(products)
        })
        .catch(products => {
            res.send(products)
        })


    
}


function getOneById(req, res) {
    Product.findById(req.params._id)
        .then(product => {
            return res.send(product)
        })
        .catch(err => {
            return res.send(err)
        })
    

}

function create(req, res) {
    
    const newProduct = {
        name: req.body.name,
        description: req.body.description
    }
    Product.create(newProduct, (err,product)=>{
        if(err) return res.status(500).send('Server error');
        const dataProduct = {
            name: product.name,
            description: product.description
        }
        res.send(dataProduct)
    })
}
module.exports = { getAll, getOneById, create }