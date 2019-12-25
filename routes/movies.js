var express = require('express');
var router = express.Router();
const db = require('../db')


/**
 * Movie Suggestor, will be used for searching. Applied GIN indexing for full text search on the db
 * Get movie by @query {title, production_company}
 * @Todo Add another parameter called production comapny to the query
 * GET /movies?title=sha
 */
router.get('/', async function(req, res, next) {
    const { title } = req.query;
    const {rows} = await db.query('select * from movie where lower(title) like $1', [`%${title}%`]);
    res.send(rows);
})



/**
 * Sends back all locations where a particular movie was shot, once we have populated movies we
 * will use movie ids, or title to fetch locations where the movie was shot
 * Get movie by @query {title} title has to be a URL Encoded string 
 * @Todo Add another parameter called production comapny to the query
 * GET /movies/shotLocation?title=A%20Night%20Full%20of%20Rain
 */
router.get('/shotLocation', async function(req, res, next) {
    let { title } = req.query;
    title = decodeURI(title);
    const {rows} = await db.query('select id, locations from movie where title=$1', [title]);
    res.send(rows);
})


/**
 * GET /movies/:id
 * get movies by id
 */
router.get('/:id', async function(req, res, next) {
    let { id } = req.params;
    const {rows} = await db.query('select id, locations from movie where id=$1', [id]);
    res.send(rows);
})



module.exports = router;
