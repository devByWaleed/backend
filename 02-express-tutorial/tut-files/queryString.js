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
});


app.get('/api/products/:productID', (req, res) => {
    const {productID} = req.params;
    const singleProduct = products.find((product) => product.id === Number(productID));
    
    if (!singleProduct) {
        return res.status(404).send("Product doesn't exist")
    }
    res.json(singleProduct)    
});


// reviews is not a parameters, it is hard-coded
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    
    res.send("Hello World!!")
});



// Query String
app.get('/api/v1/query', (req, res) => {
    // console.log(req.query);
    const { search, limit } = req.query
    let sortedProducts = [...products];

    if (search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    // Case where query doesn't match
    if (sortedProducts.length < 1) {

        // Using return will cause no errors in app
        return res.status(200).json({ success: true, data: [] })
        // res.status(200).send("No Match Product Matches Query!!")
    }
    return res.status(200).json(sortedProducts)
    // res.send("Hello World!!")
    
})


// Starting server
app.listen(5000, () => {
    console.log("Express server is listning on port 5000....");
});