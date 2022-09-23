const controller = require('./brands.controller');



module.exports = (router)=>{
    router.get('/brands', controller.getAll)
    router.get('/brands/:_id', controller.getOneById)
    router.post('/brands', controller.create)
}