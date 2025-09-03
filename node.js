const fs = require('fs');

const db = require('./db.json');

const moviesWithId = db.movies.map((m, i) => ({
  ...m,
  id: i + 1
}));

fs.writeFileSync('db.json', JSON.stringify({ movies: moviesWithId }, null, 2));
