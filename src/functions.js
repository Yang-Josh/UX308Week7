function hello(name){
    return(`hello ${name}`);
}

function FtoC (fahrenheit){
    const celsius = (fahrenheit-32)*5/9;
    return celsius;
}

function SqFtoA (SqFeet){
    const Acres =(SqFeet/43560);
    return Acres;
}
export {hello, FtoC, SqFtoA}