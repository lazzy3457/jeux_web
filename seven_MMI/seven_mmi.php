<?php
echo '
<!DOCTYPE>
<html>
    <head>
        <meta charset="UTF-8">
        <link href="seven_mmi.css" rel="stylesheet">
    </head>
    <body>
        <h1>Seven MMI</h1>
        <p>Trouvez les 7 différences dans l\'image de droite !</p>
        <section id="section01">
            <div id="image01">
                <img id="img1" src="img/Image01.jpg" alt="Image de référence">
            </div>
            <div id="image02">
                <img id="img2" src="img/Image02.jpg" alt="Image avec les différences">
                <div id="boutons">
                    <button id="Btn1">O</button>
                    <button id="Btn2">O</button>
                    <button id="Btn3">O</button>
                    <button id="Btn4">O</button>
                    <button id="Btn5">O</button>
                    <button id="Btn6">O</button>
                    <button id="Btn7">O</button>
                </div>
            </div>
        </section>
        <h2>Différences trouvées : VALEUR JAVASCRIPT </h2>
    </body>
     <script type="text/javascript" src="seven_mmi.js"></script>
</html>';
?>
