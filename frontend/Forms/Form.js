import Login from './Login.Form.js';
import Register from './Registration.Form.js';

const Form = () => { 

    // ! SMELLY CODE
    const ToLogin = document.createElement('p');
    ToLogin.innerHTML = `Already have an account?`;
    ToLogin.style = 'text-align: center; cursor: pointer; text-decoration: underline;'

    const ToRegister = document.createElement('p');
    ToRegister.innerHTML = `Don't have an account yet?`;
    ToRegister.style = 'text-align: center; cursor: pointer; text-decoration: underline;'

    const Form = document.createElement('div');
    Form.className = 'Form'
    Form.append(Login(), ToRegister);

    // ! Damn we really do be out here spitting garbage code
    ToRegister.addEventListener('click', e => {
        Form.getElementsByClassName('Login').item(0).remove();
        Form.append(Register(), ToLogin);
        ToRegister.remove();
    });
    ToLogin.addEventListener('click', e => {
        Form.getElementsByClassName('Registration').item(0).remove();
        Form.append(Login(), ToRegister);
        ToLogin.remove();
    });

    return Form;
}

export default Form;