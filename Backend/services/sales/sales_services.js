const db = require('../../db')


module.exports.getsalerecord = async()=> {
    const [rows] = await db.query('SELECT * FROM sales')
return rows;
}

module.exports.getsaleById=async(id)=> {
    const [rows] = await db.query('SELECT * FROM sales WHERE sale_id=?',[id])
    return rows;
}
module.exports.addsale = async(newSale)=>{
    const [rows]=await db.query('INSERT INTO sales SET ?',newSale)
    return rows;
}