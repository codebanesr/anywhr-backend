var express = require('express');
var router = express.Router();
const db = require('../db')


/* GET movie by id. */
router.get('/:id', async function(req, res, next) {
    const { id } = req.params
    // const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id])
    const {rows} = await db.query('select * from movie limit 1');
    res.send(rows[0]);
});

module.exports = router;
