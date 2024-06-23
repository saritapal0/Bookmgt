const express = require('express');
const router = express.Router();
const service = require('../../services/sales/sales_services');
const ResponseManager = require('../../response/responseManager');


//Record a book sale
//http://localhost:3000/api/sales/getsalerecord/

router.get('/getsalerecord',async(req,res)=>{
    const sale = await service.getsalerecord()
    ResponseManager.sendSuccess(res,sale)
  })
  
  // Record a book sale by ID.
  //http://localhost:3000/api/sales/getsalerecord/sale_id
  
  router.get('/getsalerecord/:sale_id',async(req,res)=>{
      const sale = await service.getsaleById(req.params.sale_id)
      if(sale.length == 0)
      ResponseManager.statusError(404).json('no record id:'+req.params.id)
      ResponseManager.sendSuccess(res,sale)
     })

//Add a book sale.
//http://localhost:3000/api/sales/addsale/

router.post('/addsale',async(req,res)=>{
    if (!req.body.sale_date) {
        return ResponseManager.statusError(502).sendError({ error: "sale_date Required" });
    }
    if (!req.body.sale_price) {
        return ResponseManager.statusError(502).sendError({ error: "sale_price Required" });
    }
    const affectedRows = await service.addsale(req.body)
if (affectedRows == 0) ResponseManager.statusError(404).json("no record id:" + req.params.id);
else 
ResponseManager.sendSuccess(res,"created successful");
})
module.exports = router;