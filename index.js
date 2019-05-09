// code away!
require('dotenv').config();
const server = require('./server.js');

const PORT = process.env.PORT || 6660;

server.listen(PORT, () => {
    console.log(`\n***\n Listening to http://localhost:${PORT}\n*** \n`);
});