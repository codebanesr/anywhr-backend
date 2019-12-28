const express = require('express');
const router = express.Router();
const {
    getAllMovies, getSuggestedMovies,getMovieShootingLocation,getMovieById
} = require('../service/moviesService');


/** 
 * GET /movies
 * get all movies
 * @query {page, perPage} for pagination, setting a default of 20 and page 1
 * GET /movies?title=sha&page=1&perPage=1
 */
router.get('/', async function(req, res, next) {
    let { page=1, perPage=20 } = req.query;
    const offset = (page-1)*perPage;
    const result = await getAllMovies(perPage, offset);
    res.send(result);
})


/**
 * Movie Suggestor, will be used for searching. Applied GIN indexing for full text search on the db
 * Get movie by @query {title}
 * @Todo Add another parameter called production comapny to the query
 * GET /movies/suggest?title=sha&page=1&perPage=1
 */
router.get('/suggest', async function(req, res, next) {
    let { title, page=1, perPage=20 } = req.query;
    title=title.toLocaleLowerCase();
    const offset = (page-1)*perPage;
    const result = await getSuggestedMovies(title, perPage, offset)
    res.send(result);
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
    const result = await getMovieShootingLocation(title);
    res.send(result);
})


/**
 * GET /movies/:id
 * get movies by id
 */
router.get('/:id', async function(req, res, next) {
    let { id } = req.params;
    const result = await getMovieById(id);
    res.send(result);
})


module.exports = router;
