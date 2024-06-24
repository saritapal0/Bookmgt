const express = require("express");
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const cors = require('cors')
require('express-async-errors')
const ResponseManager = require('./response/responseManager');
const bodyParser = require("body-parser");
bookRoutes = require('./controller/books/bookscontrol')
clientRoutes = require('./controller/clients/clientscontrol')
booktypeRoutes = require('./controller/booktype/booktypecontrol')
qualityRoutes = require('./controller/quality/quaalitycontrol')
salesRoutes = require('./controller/sales/salescontrol')
purchaseRoutes = require ('./controller/purchase/purchasecontrol')
orderhistoryRoutes = require('./controller/orderhistory/orderhistrycontrol')
loginRoutes = require('./Auth/login');
uploadcartsRouter= require('./controller/carts/cartscontrol')

//middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
app.use('/api/books',bookRoutes)
app.use('/api/clients',clientRoutes)
app.use('/api/booktype',booktypeRoutes)
app.use('/api/quality',qualityRoutes)
app.use('/api/sales',salesRoutes)
app.use('/api/purchase',purchaseRoutes)
app.use('/api/orderhistory',orderhistoryRoutes)
app.use('/login',loginRoutes);
app.use('/api/cartsuploaded/carts',uploadcartsRouter)


//Global handler
app.all("*", (req, res) => {
  ResponseManager.sendError(res, 404, "", "Yes", "Page Not Found");
});
 
app.listen(3000,()=>{
  console.log('server running on 3000');
})