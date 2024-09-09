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