window.onload = function() {
    var img = document.getElementsByTagName("img")[1];
    var imgArr = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
    var index = 0;
    setInterval(function() {
        index += 1;
        if (index > imgArr.length - 1) {
            index = 0;
        }
        img.src = imgArr[index];
    }, 3000);
    var audio = document.getElementById('music1');
    var audio1 = document.getElementById('music2');
    var audio2 = document.getElementById('music3');
    var audio3 = document.getElementById('music4');
    var audio4 = document.getElementById('music5');
    var audio5 = document.getElementById('music6');
    var audio6 = document.getElementById('music7');
    var audio7 = document.getElementById('music8');
    var audio8 = document.getElementById('music9');
    var audio9 = document.getElementById('music10');


    audio.pause();
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
    audio7.pause();
    audio8.pause();
    audio9.pause();




}

function play() {
    var audio = document.getElementById('music1');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
        audio.currentTime = 0; //音乐从头播放
    }
}

function play1() {
    var audio1 = document.getElementById('music2');
    if (audio1.paused) {
        audio1.play();
    } else {
        audio1.pause();
        audio1.currentTime = 0; //音乐从头播放
    }
}

function play2() {
    var audio2 = document.getElementById('music3');
    if (audio2.paused) {
        audio2.play();
    } else {
        audio2.pause();
        audio2.currentTime = 0; //音乐从头播放
    }
}

function play3() {
    var audio3 = document.getElementById('music4');
    if (audio3.paused) {
        audio3.play();
    } else {
        audio3.pause();
        audio3.currentTime = 0; //音乐从头播放
    }
}

function play4() {
    var audio4 = document.getElementById('music5');
    if (audio4.paused) {
        audio4.play();
    } else {
        audio4.pause();
        audio4.currentTime = 0; //音乐从头播放
    }
}

function play5() {
    var audio5 = document.getElementById('music6');
    if (audio5.paused) {
        audio5.play();
    } else {
        audio5.pause();
        audio5.currentTime = 0; //音乐从头播放
    }
}

function play6() {
    var audio6 = document.getElementById('music7');
    if (audio6.paused) {
        audio6.play();
    } else {
        audio6.pause();
        audio6.currentTime = 0; //音乐从头播放
    }
}

function play7() {
    var audio7 = document.getElementById('music8');
    if (audio7.paused) {
        audio7.play();
    } else {
        audio7.pause();
        audio7.currentTime = 0; //音乐从头播放
    }
}

function play8() {
    var audio8 = document.getElementById('music9');
    if (audio8.paused) {
        audio8.play();
    } else {
        audio8.pause();
        audio8.currentTime = 0; //音乐从头播放
    }
}

function play9() {
    var audio9 = document.getElementById('music10');
    if (audio9.paused) {
        audio9.play();
    } else {
        audio9.pause();
        audio9.currentTime = 0; //音乐从头播放
    }
}