var btns = document.getElementsByClassName("btn")　　　
var contents = document.getElementsByClassName("content")

for (var i = 0; i < btns.length; i++) {
    btns[i].index = i;
    btns[i].onclick = function() {　　　　　
        for (var j = 0; j < btns.length; j++) {
            btns[j].className = btns[j].className.replace(' active', '').trim();
            contents[j].className = contents[j].className.replace(' show', '').trim();
        }
        this.className = this.className + ' active';
        contents[this.index].className = contents[this.index].className + ' show';
    };

}
//登录验证
document.getElementById('submit').addEventListener('click', function() {
    var text = document.getElementById('text').value;
    var password = document.getElementById('password').value;
    if ((text.length > 5 && text.length<14) && (password.length >7 && password.length <17)) {
        window.location.href = 'index.html';
    } else {
        alert('抱歉，用户名或密码错误！');
    }
});