// routes/api.js
const express = require('express');
const router = express.Router();

// GET /api/books
router.get('/books', function (req, res, next) {

    // Get optional search term
    let search = req.query.search;          // optional text search
    let minprice = req.query.minprice;      // optional min price
    let maxprice = req.query.maxprice;      // optional max price
    let sort = req.query.sort;              // sort option

    let sqlquery = "SElECT * FROM books WHERE 1=1";
    let params = [];

    // Search filter
    if (search) {
        sqlquery += " AND name LIKE ?";
        params.push('%' + search + '%');
    }

    // Minimum price filter
    if (minprice) {
        sqlquery += " AND price >= ?";
        params.push(minprice);
    }

    // Maximum price filter
    if (maxprice) {
        sqlquery += " AND price <= ?";
        params.push(maxprice);
    }

    // Sorting options
    if (sort) {
        switch (sort) {
            case 'price_asc':
                sqlquery += " ORDER BY price ASC";
                break;

            case 'price_desc':
                sqlquery += " ORDER BY price DESC";
                break;

            case 'name_asc':
                sqlquery += " ORDER BY name ASC";
                break;

            case 'name_desc':
                sqlquery += " ORDER BY name DESC";
                break;

            default:
                // If invalid sort option provided, ignore it
                break;
        }
    }

    // Execute the SQL query
    db.query(sqlquery, params, (err, result) => {
        if (err) {
            res.json(err);
            next(err);
        } else {
            res.json(result);
        }
    });
        
});

module.exports = router;