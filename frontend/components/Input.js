/**
 * 
 * @param {String} Placeholder You can set a Placeholder value here
 * @param {String} Type 
 * You can set a type value here
 * Value types:
 * - text: set input value as plain text
 * - password: converts all input at the field as asterisk to hide your weak ass password
 */
const Inputfield = (Placeholder, Type) => {
    const Input = document.createElement('input');
    Input.placeholder = Placeholder;
    Input.type = Type;

    return Input;
}

export default Inputfield;