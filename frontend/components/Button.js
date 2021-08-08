/**
 * 
 * @param {String} Text Sets the Button Text
 * @param {function} Callback The function to execute if a event is triggered
 * @param {String} Event Accepts Button event types
 */
const Button = (Text, Callback, Event) => {
    const Btn =  document.createElement('button');
    Btn.innerHTML = Text;
    Btn.addEventListener(Event, Callback);    
    return Btn;
}

export default Button;