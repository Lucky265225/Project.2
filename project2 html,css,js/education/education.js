function display(){
    
    let age = document.getElementById("toAge").value ;

    if(age <= 12){
        document.getElementById("play").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/P6tBppPENdg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
    }
    else if(age <= 18){
        document.getElementById("play").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/I-NC-l0mLBg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
    }
    else if(age <= 24){
        document.getElementById("play").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/69ElSG6Cn_g\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
    }
    else{
        document.getElementById("play").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/mZecaPx2i28\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
    }
}
