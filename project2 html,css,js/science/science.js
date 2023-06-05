function toCelsius(fahrenheit){
    let value = (fahrenheit - 32) * 5 / 9
    return value.toFixed(2) + "°C"
}

function toFahrenheit(celsius){
    let value = celsius * 9 / 5 + 32
    return value.toFixed(2) + "°F"
}

function toCelsiusProgram(value){
    document.getElementById("lol").innerHTML = toCelsius(value)
}

function toFahrenheitProgram(value){
    document.getElementById("lol").innerHTML = toFahrenheit(value)
}
