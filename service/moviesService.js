const db = require('../db')

const getAllMovies = async(perPage, offset) => {
    const {rows} = await db.query('select * from movie order by title asc limit $1 offset $2', [perPage, offset]);
    let {rows: [{total}]} = await db.query('select count(*) as total from movie');
    total = Number(total);
    return {data: rows, total}
}


const getSuggestedMovies = async(title, perPage, offset) => {
    const {rows} = await db.query('select * from movie where lower(title) like $1 limit $2 offset $3', [`%${title}%`, perPage, offset]);
    const {rows: [{total}]} = await db.query('select count(*) as total from movie where lower(title) like $1', [`%${title}%`]);
    return {data: rows, total}
}

const getMovieShootingLocation = async(title) => {
    title = decodeURI(title);
    const {rows} = await db.query(`select *,
        (select json_agg(locations) as locations from movie_location where title=$1)
        from movie where title=$1`, [title]);
    return rows[0];
}

const getMovieById = async(id) => {
    const {rows} = await db.query('select title from movie where id=$1', [id]);
    return rows;
}



module.exports = {
    getAllMovies,
    getSuggestedMovies,
    getMovieShootingLocation,
    getMovieById
}