// login.js

document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.querySelector('.login');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Formun otomatik gönderilmesini engelle

        // Kullanıcı adı ve şifreyi al
        var username = document.querySelector('.login__input[type="text"]').value;
        var password = document.querySelector('.login__input[type="password"]').value;

        // Kullanıcı adı ve şifreyi kontrol et
        if (username === 'admin' && password === '123456') {
            // Başarılı giriş durumunda ana sayfaya yönlendir
            window.location.href = 'index.html'; // admin.html sayfasına yönlendir
        } else {
            // Hatalı giriş durumunda hata mesajı göster
            alert('Kullanıcı adı veya şifre yanlış!');
        }
    });
});
