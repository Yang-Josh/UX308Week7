function hello(name){
    return(`hello ${name}`);
}
function FtoC (fahrenheit){
    const celsius = (fahrenheit-32)*5/9;
    return celsius;
}
export {hello, FtoC}