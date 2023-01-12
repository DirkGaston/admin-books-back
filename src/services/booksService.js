const pool = require('../database');

const list = async () => {
    try {
        const consulta = "SELECT * FROM books";
        const { rows: books } = await pool.query(consulta)
        return books;
    } catch (error) {
        console.error("hubo un error al obtener los libros ", error);
        return [];
    }
};

module.exports = {
    list,
};
