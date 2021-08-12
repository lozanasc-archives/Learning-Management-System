
import Input from '../components/Input.js';
import Button from '../components/Button.js';
import Dashboard from '../Dashboard/Dashboard.js';

const LoginForm = () => {

    const LoginHeader = document.createElement('h1');
    LoginHeader.innerHTML = 'LOGIN';

    const Username = Input('Enter your username', 'text');
    const Password = Input('Enter your password', 'password');

    // ! Garbage,Shite,Smelly code **USE ONLY FOR TESTING
    const LoginButton = Button('Sign in',(e)=>{
        e.preventDefault();
        fetch(`http://localhost:7001/student/auth`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"User": Username.value})
        })
        .then(load => {
            load.json()
            .then(ToAuthenticateData => {
                const {student_user_full_name: Fullname, student_user_name: UserName, student_user_password: Pass} = ToAuthenticateData[0];
                if(Username.value == UserName && Password.value == Pass){
                    let Root = document.querySelector('#root');
                    Root.getElementsByClassName('MenuContainer').item(0).remove();
                    console.log(Fullname);
                    Root.append(Dashboard(Fullname));
                }

                else
                    alert('Login Unsuccessful')
            })
            .catch(err => console.trace(err));
        })
        .catch(error => console.trace(error));
    },'click');

    const InputContainer = document.createElement('div');
    InputContainer.className = 'InputContainer';
    InputContainer.append
    (
        LoginHeader, 
        Username, 
        Password,
        LoginButton
    );

    const LoginContainer = document.createElement('div');
    LoginContainer.className = 'Login';
    LoginContainer.append(InputContainer);

    return LoginContainer;
}

export default LoginForm;
