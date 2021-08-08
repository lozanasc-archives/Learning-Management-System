const Connection = require('../../database/backend.mysql');
module.exports = async(UserName) => {
    try {
        const User = await Connection(`SELECT student_user_full_name, student_user_name, student_user_password FROM student WHERE student_user_name='${UserName}'`);
        return User;
    } catch (error) {
        console.trace(error);
    }
}