const Brand = require('./brands.dao')



function getAll(req, res) {
    Brand.find({})
        .then(brands => {
            res.send(brands)
        })
        .catch(brands => {
            res.send(brands)
        })


    
}


function getOneById(req, res) {
    Brand.findById(req.params._id)
        .then(brand => {
            return res.send(brand)
        })
        .catch(err => {
            return res.send(err)
        })
    

}

function create(req, res) {
    
    const newBrand = {
        name: req.body.name,       
    }
    Brand.create(newBrand, (err,brand)=>{
        if(err) return res.status(500).send('Server error');
        const dataBrand = {
            name: brand.name,
        }
        res.send(dataBrand)
    })
}
module.exports = { getAll, getOneById, create }