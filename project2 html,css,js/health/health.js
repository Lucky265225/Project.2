function calculate(height, weight) {
    let value = weight / (height * height) * 10000;
    return value.toFixed(2);
}
function bmi() {
    let height = document.getElementById('toHeight').value;
    let weight = document.getElementById('toWeight').value;
    let value = calculate(height, weight);
    document.getElementById('answerBmi').innerHTML = value;

    if(value <= 18.5){
        document.getElementById("describe").innerHTML = "คุณมีค่าBMIต่ำกว่าปกติ"
    }
    else if(value <= 25.0){
        document.getElementById("describe").innerHTML = "คุณมีค่าBMIปกติ"
    }
    else if(value <= 30.0){
        document.getElementById("describe").innerHTML = "คุณมีค่าBMIมากกว่าปกติ"
    }
    else if(value <= 35.0){
        document.getElementById("describe").innerHTML = "คุณมีค่าBMIเยอะมากๆๆ"
    }
    else{
        document.getElementById("describe").innerHTML = "คุณมีค่าBMIเยอะมากๆๆๆๆๆๆๆๆๆๆๆๆๆๆ"
    }
}

