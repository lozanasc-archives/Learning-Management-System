const Connection = require('../../database/backend.mysql.js');

module.exports = async() => {
    try {
        const Data = await Connection(`SELECT * FROM student`);
        return Data;
    } catch (error) {
        console.trace(error);
    }
}