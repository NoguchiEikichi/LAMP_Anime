<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TVアニメ「暗殺教室」紹介サイト</title>
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <header id="main-header" style="text-align:left; padding: 2px 0 0; "></header>

    <script>
        // ヘッダーを読み込む
        fetch('../reference/header.html')
            .then(response => response.text())
            .then(data => document.getElementById('main-header').innerHTML = data);
    </script>

    <h1 style="color: #f0f8ff;">　インタビューページです。</h1>
    
    <p><a href="index.html" style="color:#f0f8ff; text-decoration: none">一覧に戻る</a></p>
    
    <footer>
        <p></p>
    </footer>
</body>
</html>