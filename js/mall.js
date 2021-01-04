window.onload = function() {
    var img = document.getElementsByTagName("img")[2];
    var imgArr = ["img/sclbt1.jpg", "img/sclbt2.jpg", "img/sclbt3.jpg", "img/sclbt4.jpg", "img/sclbt5.jpg", "img/sclbt6.jpg"];
    var index = 0;
    setInterval(function() {
        index += 1;
        if (index > imgArr.length - 1) {
            index = 0;
        }
        img.src = imgArr[index];
    }, 3000);
}