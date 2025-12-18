// Function To Use Database
use('ecommerce');


// $set operator update value of selected product
/*
db.products.updateOne(
    { name: "Wireless Mouse" },
    { $set: { price: 1500 } }
)
*/


// Use $inc operator to increase values
/*
db.products.updateMany(
    { category: "Electronics" },
    { $inc: { stock: 10 } }
)
*/


// $push operator add new property to required part of data
/*
db.products.updateOne(
    { name: "Gaming Laptop" },
    { $push: { tags: "new tag" } }
)
*/