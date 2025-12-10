// Adding express
const express = require('express')

// Creating app with express
const app = express()
const {products} = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">View Products</a>')
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image}
    });
    res.json(newProducts)
    // res.json(products)
});


app.get('/api/products/:productID', (req, res) => {
    const {productID} = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID));

    if (!singleProduct) {
        return res.status(404).send("Product doesn't exist")
    }
    res.json(singleProduct)

});

// Not efficient for large data
/*
app.get('/api/products/1', (req, res) => {
    const singleProduct = products.find((product) => product.id === 1);
    res.json(singleProduct)
    // res.json(newProducts)
    // res.json(products)
});
*/

// Starting server
app.listen(5000, () => {
    console.log("Express server is listning on port 5000....");
});