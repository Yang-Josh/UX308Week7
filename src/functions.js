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

function AirQI (AQI){
    var Quality = 0;
    if (AQI>= 0 && AQI <= 50 ){
     Quality = "Good";
    }
    else if (AQI >= 51 && AQI <= 100){
        Quality = "Moderate";
    }
     else if (AQI >= 101 && AQI <= 150){
        Quality = "Unhealthy for Sensitive Groups";
    }
     else if (AQI >= 151 && AQI <= 200){
        Quality = "Unhealthy";
    }
    else if (AQI >= 201 && AQI <= 300){
        Quality = "Very Unhealthy";
    }
    else if (AQI > 300){
        Quality = "Hazardous";
    }
    else {
        Quality = "Unknown";
    }
    return Quality;
}

function Yeeha (Yee_Ha) {
    var Result = 0;
    const Test = Yee_Ha/3;
    const Test2 = Yee_Ha/7;

    if (!isNaN(Test) && !isNaN(Test2)){
        Result = "Yee Ha";
    }

    else if(!isNaN(Test) && isNaN(Test2)){
        Result = "Yee";
    }

    else if (isNaN(Test) && !isNaN(Test2)){
        Result = "Ha";
    }

    else {
        Result = "Nada";
    }  
    return Result;
}

function SlopeCalc (Rise, Run){
    const Slope = Rise/Run;
    return Slope;
}

export {hello, FtoC, SqFtoA, Mowing, AirQI, Yeeha, SlopeCalc}