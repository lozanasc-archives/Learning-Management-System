const Connection = require('../../database/backend.mysql');
/**
 * 
 * @param {String} Username 
 * @param {String} Password 
 * @param {String} FullName 
 * @param {String} Address 
 * @param {String} Course
 */
module.exports = async( Username, Password, FullName, Address, Course ) => {
    try {
        await Connection(`INSERT INTO student 
                        (student_id,
                        student_user_name,
                        student_user_password,
                        student_user_full_name,
                        student_user_address,
                        student_user_course) 
                            VALUES 
                        (null,
                        '${Username}',
                        '${Password}',
                        '${FullName}',
                        '${Address}',
                        '${Course}');
                        `);
        return true;
    } catch (error) {
        console.trace(error);
    }
}