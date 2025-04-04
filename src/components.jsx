import {SlopeCalc,Yeeha, AirQI, FtoC, Mowing, SqFtoA, hello} from './functions.js';

function Question1 (){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>;
}

function QuestionA (){
    return <section>
        A. Write a function that converts fahrenheit to celcius
        <h2> results</h2>
        <p> FtoC(32) == "{FtoC(32)}"</p>
        <p> FtoC(64) == "{FtoC(64)}"</p>
        <p> FtoC(212) == "{FtoC(212)}"</p>
    </section>
}

function Question2 (){
    return <section>
        2. Write a function that converts Square Feet to Acres
        <h2> results</h2>
    <p> SqFtoA(43560) == "{SqFtoA(43560)}"</p>
    <p> SqFtoA(43560) == "{SqFtoA(43560)}"</p>
    <p> SqFtoA(43560) == "{SqFtoA(43560)}"</p>
    </section>
}

function Question3 (){
    return <section>
        3. Calculate lawn area and total mowing time 
        <h2> results</h2>
        <p> Mowing (5,5) == "{Mowing(5,5)}"</p>
        <p> Mowing (5,5) == "{Mowing(5,5)}"</p>
        <p> Mowing (5,5) == "{Mowing(5,5)}"</p>
    </section>
}

function Question4 (){
    return <section>
        4. Take AQI level and give results
        <h2> results</h2>
        <p>AirQI (1) == "{AirQI(1)}"</p>
        <p>AirQI (100) == "{AirQI(1)}"</p>
        <p>AirQI (1000) == "{AirQI(1)}"</p>
    </section>
}

function Question5 (){
    return <section>
        5. Check if divisible by 3 and or 7
        <h2> results</h2>
        <p>Yeeha (3) == "{Yeeha (3)}"</p>
        <p>Yeeha (3) == "{Yeeha (3)}"</p>
        <p>Yeeha (3) == "{Yeeha (3)}"</p>
    </section>
}

function Question6 (){
    return <section>
        6. Calculate slope
        <h2> results</h2>
        <p> SlopeCalc (4,2) == "{SlopeCalc (4,2)}"</p>
        <p> SlopeCalc (4,2) == "{SlopeCalc (4,2)}"</p>
        <p> SlopeCalc (4,2) == "{SlopeCalc (4,2)}"</p>
    </section>
}

export {Question1, QuestionA, Question2, Question3, Question4, Question5, Question6}