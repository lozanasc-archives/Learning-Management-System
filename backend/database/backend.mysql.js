const mysql = require('mysql');

// Configuration object for MySQL
const config = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'lms',
    multipleStatements: true 
}

// Creates the connection
const Connection = mysql.createPool(config);

module.exports = (query) => {
    return new Promise((resolve, reject) => {
        try {
            Connection.getConnection((err, toConnect) => {
                if(err)
                    reject(err)
                else{
                    toConnect.query(query, (error, rows) => {
                        if(error)
                            console.log('Welp, something went wrong!', error);
                        else
                            resolve(rows);
                        
                        toConnect.release();
                    })
                }
            })
        }
        catch(err){
            console.log('Something went wrong!', err);
        }
    })
}