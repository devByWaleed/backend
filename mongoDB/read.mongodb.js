// Function To Use Database
use('ecommerce');


// Read product by "price"
/*
db.products.find({ "price": 799 })
*/


// Read product by "name"
/*
db.products.find({ "name": "Wireless Mouse" })
*/


// Read product by "price" using comparison operators
/*
db.products.find({ price: { $gte: 1000, $lte: 50000 } })
*/


// Read product by "price" using $or operators
/*
db.products.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] })
*/


// No need of filter & id
/*
db.products.find({}, { name: 1, price: 1, _id: 0 })
*/


// Pagination
// 1,2,3,... buttons at bottom of page
/*
db.products.find().sort({ price: -1 }).limit(2)
*/