const controller = require('./products.controller');



module.exports = (router)=>{
    router.get('/', controller.getAll)
    router.get('/:_id', controller.getOneById)
    router.post('/', controller.create)
}
