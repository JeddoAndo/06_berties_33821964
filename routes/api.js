// routes/api.js
const express = require('express');
const router = express.Router();

// GET /api/books
router.get('/books', function (req, res, next) {

    // Get optional search term
    let search = req.query.search;

    let sqlquery;
    let params = [];

    if (search) {
        // Use SQL LIKE for partial matching
        sqlquery = "SELECT * FROM books WHERE name LIKE ?";
        params = ['%' + search + '%'];
    } else {
        // Default behaviour: return all books
        sqlquery = "SELECT * FROM books";
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