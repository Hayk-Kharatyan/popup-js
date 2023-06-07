let arrImg = ["img1.jpg", "img2.jpg", "img3.jpg"]
let n=0
let img = document.querySelectorAll(".im")

for(let i = 0;i<img.length;i++){

img[i].addEventListener("click",function(){
document.querySelector(".full").style="transform: scale(1)"
let imgsrc = this.src
document.querySelector("#imgt").src=imgsrc
n=this.id;


})

}


document.querySelector("#close").addEventListener("click",function(){

    document.querySelector(".full").style="transform: scale(0)"

})








document.querySelector(".left").addEventListener("click", function () {
    if (n > 0) {

        n--

    }

    else {
        n = arrImg.length-1
    }

    document.querySelector("#imgt").src = arrImg[n]

})



document.querySelector(".right").addEventListener("click", function () {
    if (n < arrImg.length - 1 ) {

        n++

    }
    else {
        n = 0
    }

    document.querySelector("#imgt").src = arrImg[n]
})


