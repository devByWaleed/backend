// Function To Use Database
use('ecommerce');


// Inserting data into "sales" collection

// db.sales.insertMany([
//     { _id: 1, item: "Apple", price: 10, quantity: 5, category: "Fruit" },
//     { _id: 2, item: "Banana", price: 5, quantity: 10, category: "Fruit" },
//     { _id: 3, item: "Carrot", price: 8, quantity: 6, category: "Vegetable" },
//     { _id: 4, item: "Tomato", price: 6, quantity: 8, category: "Vegetable" },
//     { _id: 5, item: "Mango", price: 15, quantity: 3, category: "Fruit" },

//     { _id: 6, item: "Orange", price: 12, quantity: 7, category: "Fruit" },
//     { _id: 7, item: "Potato", price: 4, quantity: 20, category: "Vegetable" },
//     { _id: 8, item: "Onion", price: 3, quantity: 25, category: "Vegetable" },
//     { _id: 9, item: "Milk", price: 20, quantity: 10, category: "Dairy" },
//     { _id: 10, item: "Cheese", price: 50, quantity: 4, category: "Dairy" },

//     { _id: 11, item: "Bread", price: 25, quantity: 6, category: "Bakery" },
//     { _id: 12, item: "Butter", price: 45, quantity: 5, category: "Dairy" },
//     { _id: 13, item: "Eggs", price: 30, quantity: 12, category: "Poultry" },
//     { _id: 14, item: "Chicken", price: 120, quantity: 3, category: "Meat" },
//     { _id: 15, item: "Beef", price: 250, quantity: 2, category: "Meat" },

//     { _id: 16, item: "Fish", price: 200, quantity: 4, category: "Seafood" },
//     { _id: 17, item: "Rice", price: 80, quantity: 10, category: "Grains" },
//     { _id: 18, item: "Wheat Flour", price: 70, quantity: 8, category: "Grains" },
//     { _id: 19, item: "Sugar", price: 60, quantity: 6, category: "Grocery" },
//     { _id: 20, item: "Salt", price: 20, quantity: 15, category: "Grocery" },

//     { _id: 21, item: "Tea", price: 90, quantity: 5, category: "Beverage" },
//     { _id: 22, item: "Coffee", price: 150, quantity: 4, category: "Beverage" },
//     { _id: 23, item: "Juice", price: 40, quantity: 9, category: "Beverage" },
//     { _id: 24, item: "Soap", price: 35, quantity: 10, category: "Household" },
//     { _id: 25, item: "Detergent", price: 110, quantity: 3, category: "Household" },

//     { _id: 26, item: "Shampoo", price: 180, quantity: 2, category: "Personal Care" },
//     { _id: 27, item: "Toothpaste", price: 60, quantity: 6, category: "Personal Care" },
//     { _id: 28, item: "Notebook", price: 45, quantity: 12, category: "Stationery" },
//     { _id: 29, item: "Pen", price: 10, quantity: 30, category: "Stationery" },
//     { _id: 30, item: "Marker", price: 25, quantity: 10, category: "Stationery" }
// ]);



// 
db.sales.aggregate([
    // Extract products by category
    // { $match: { category: "Fruit" } }


    // Select specific fields
    // { $project: { _id: 0, item: 1, price: 1 } }


    // Calculating total sales
    // { $group: {
    //     _id: "$category",
    //     totalSales: { $sum: { $multiply: ["$price", "$quantity"] } }
    // }}

]);
