const db = require('../../db')


module.exports.getpurchaserecord = async()=> {
    const [rows] = await db.query('SELECT * FROM purchase')
return rows;
}

module.exports.getpurchaseById=async(id)=> {
    const [rows] = await db.query('SELECT * FROM purchase WHERE purchase_id=?',[id])
    return rows;
}
module.exports.addpurchase= async(newPurchase)=>{
    const [rows]=await db.query('INSERT INTO purchase SET ?',newPurchase)
    return rows;
}