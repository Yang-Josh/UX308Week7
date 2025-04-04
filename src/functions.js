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

function Mowing (Width, Rate){
    const Area = Width*Width;
    const Time = Area/Rate;
    return Time;
}


export {hello, FtoC, SqFtoA, Mowing}