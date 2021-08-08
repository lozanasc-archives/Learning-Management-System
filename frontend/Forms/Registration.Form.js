/*
 ? Para asa ni?
 * We're gonna render the forms ya'll see at the side from the design dynamically using javascript
 ? Nganong dle mugamit ug .html pages? or nganong dle usahon ra?
 * Scale, para mas sayon mu add ug delete ug feature or changes sa code
*/
import Input from '../components/Input.js';
import Button from '../components/Button.js';

const RegistrationForm = () => {

    const RegisterHeader = document.createElement('h1');
    RegisterHeader.innerHTML = 'REGISTER';

    const Username = Input('Enter your username', 'text');
    const Password = Input('Enter your password', 'password');
    const Fullname = Input('Enter your full name', 'text');
    const Address = Input('Enter your address', 'text');
    // ! FOR TESTING ONLY!
    const Course = Input('Enter your course', 'text');

    // ! Garbage,Shite,Smelly code **USE ONLY FOR TESTING
    const RegisterButton = Button('Sign up',(e)=>{
        e.preventDefault();
        fetch(`http://localhost:7001/student/enroll`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'Name': Username.value,
                'Password': Password.value,
                'FullName': Fullname.value,
                'Address': Address.value,
                'Course': Course.value
            })
        })
        .then(load => {
            load.json()
            .then(({enrollment_description: Status}) => alert(Status))
            .catch(Error => alert(Error));
        })
        .catch(error => console.trace(error));
    },'click');

    const RegisterContainer = document.createElement('div');
    RegisterContainer.className = 'Form Registration InputContainer';
    RegisterContainer.append(
                    RegisterHeader,
                    Username,
                    Password,
                    Fullname,
                    Address,
                    Course,
                    RegisterButton
                    );

    return RegisterContainer;
}

export default RegistrationForm;