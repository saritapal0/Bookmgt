
const express = require('express');
const router = express.Router();
const service = require('../../services/purchase/purchase_services');
const ResponseManager = require('../../response/responseManager');


// Record a book purchase
//http://localhost:3000/api/sales/getsalerecord/

router.get('/getpurchaserecord',async(req,res)=>{
    const purchase= await service.getpurchaserecord()
    ResponseManager.sendSuccess(res,purchase)
  })
  
  // Record a book purchase by ID.
  //http://localhost:3000/api/purchase/getpurchaserecord/purchase_id
  
  router.get('/getpurchaserecord/:purchase_id',async(req,res)=>{
      const purchase = await service.getpurchaseById(req.params.purchase_id)
      if(purchase.length == 0)
      ResponseManager.statusError(404).json('no record id:'+req.params.id)
      ResponseManager.sendSuccess(res,purchase)
     })


//Record a book purchase.
//http://localhost:3000/api/purchase/addpurchase/

router.post('/addpurchase',async(req,res)=>{
    if (!req.body.purchase_date) {
        return ResponseManager.statusError(502).sendError({ error: "purchase_date Required" });
    }
    const affectedRows = await service.addpurchase(req.body)
    if (affectedRows == 0) ResponseManager.statusError(404).json("no record id:" + req.params.id);
    else 
    ResponseManager.sendSuccess(res,"created successful");
})
module.exports = router;
