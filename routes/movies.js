var express = require('express');
var router = express.Router();
const db = require('../db')

/** 
 * GET /movies
 * get all movies
 * @query {page, perPage} for pagination, setting a default of 20 and page 1
 * GET /movies?title=sha&page=1&perPage=1
 */
router.get('/', async function(req, res, next) {
    let { page=1, perPage=20 } = req.query;
    const offset = (page-1)*perPage;
    const {rows} = await db.query('select id, title, locations from movie order by title asc limit $1 offset $2', [perPage, offset]);
    res.send(rows);
})


/**
 * Movie Suggestor, will be used for searching. Applied GIN indexing for full text search on the db
 * Get movie by @query {title}
 * @Todo Add another parameter called production comapny to the query
 * GET /movies/suggest?title=sha&page=1&perPage=1
 */
router.get('/suggest', async function(req, res, next) {
    let { title, page=1, perPage=20 } = req.query;
    const offset = (page-1)*perPage;
    const {rows} = await db.query('select * from movie where lower(title) like $1 limit $2 offset $3', [`%${title}%`, perPage, offset]);
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
