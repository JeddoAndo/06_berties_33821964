// routes/api.js
const express = require('express');
const router = express.Router();

// GET /api/books
router.get('/books', function (req, res, next) {

    // Get optional search term
    let search = req.query.search;          // optional text search
    let minprice = req.query.minprice;      // optional min price
    let maxprice = req.query.maxprice;      // optional max price

    let sqlquery = "SElECT * FROM books WHERE 1=1";
    let params = [];

    // Add search if given
    if (search) {
        sqlquery += " AND name LIKE ?";
        params.push('%' + search + '%');
    }

    // Add min price if provided
    if (minprice) {
        sqlquery += " AND price >= ?";
        params.push(minprice);
    }

    // Add max price if provided
    if (maxprice) {
        sqlquery += " AND price <= ?";
        params.push(maxprice);
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