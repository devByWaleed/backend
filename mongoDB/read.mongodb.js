use('ecommerce');

// db.products.find({ "price": 799 })


// db.products.find({ "name": "Wireless Mouse" })

// db.products.find({ price: { $gte: 1000, $lte: 50000 } })


db.products.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] })