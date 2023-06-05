function calculate() {
    let day = Number(document.getElementById("day").value) ;
    let collect = Number(document.getElementById("collect").value) ;
    let use = Number(document.getElementById("use").value) ;
    let totle = 0 ;

    for(let i = 1 ; i <= day ; i++) {
        totle += collect ;
    }
    
    let difference = totle - use ;

    if(totle >= use) {
        document.getElementById("money").innerHTML = "คุณเก็บเงินครบแล้ว"
    }
    else{
        document.getElementById("money").innerHTML = "คุณจะต้องเก็บเงินเพิ่ม"
    }

    document.getElementById("collectMoney").innerHTML = totle + " บาท";
    document.getElementById("differentMoney").innerHTML = difference + " บาท";
}
