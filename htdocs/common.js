//ページ内リンク
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            // URLから#を削除
            history.replaceState(null, null, window.location.pathname);
        }
    });
});

//ヘッダーの読み込み
fetch('../reference/header.html')
.then(response => response.text())
.then(data => document.getElementById('main-header').innerHTML = data);
