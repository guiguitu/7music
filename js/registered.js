document.getElementById('submit').addEventListener('click', function() {
    var text = document.getElementById('text').value;
    var password = document.getElementById('password').value;
    if ((text.length > 5 && text.length < 14) && (password.length > 7 && password.length < 17)) {
        window.location.href = 'Signin.html';
    } else {
        alert('抱歉，注册用户名或密码错误！');
    }
});