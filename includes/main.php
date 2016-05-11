<?php

date_default_timezone_set('America/Chicago');

function template_layout($html) {
  echo <<<HTML
    <html>
      <head>
        <title>Lake Austin Boat Rentals - Lake Travis Boat Rentals - Wake Surfing</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="initial-scale=1.0">
        <meta name="description" content="LAKE AUSTIN – LAKE TRAVIS AND LAGO VISTA BOAT RENTALS. FOR RESERVATIONS CALL: (512) 809-7742 ">
        <meta name="keywords" content="lake austin boat rentals, lake travis boat rentals, lago vista boat rentals, wake boarding, water tubing, wake surfing, boat rentals, captain, austin boat, wake riderz  ">
        <meta name="robots" content="noodp,noydir">
        <meta name="google-site-verification" content="Pw5aXi241wm4Ab3WHEcmaL4-4WdkDkmxjFKrkK3HDzM" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="../dist/js/app-min.js"></script>
        <link rel="stylesheet" href="../dist/css/app.min.css" type="text/css">
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
        <link rel="shortcut icon" href="../dist/files/favicon.ico" type="image/vnd.microsoft.icon">
      </head>
      <body>
        <div id="social-bar">
          <ul>
            <li><a href="https://www.facebook.com/Wake-Riderz-1714558198760355/" data-tip="bottom" data-original-title="Facebook" target="_blank"><i class="fa fa-facebook"></i></a></li>
            <li><a href="https://twitter.com/home?status=Check%20out%20Wake%20Riderz!%20Lake%20Austin%20Boat%20Rentals!%20http%3A//www.wakeriderz.com" data-tip="bottom" data-original-title="Twitter" target="_blank"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://plus.google.com/share?url=http%3A//www.wakeriderz.com/lakeaustinboatrentals" data-tip="bottom" data-original-title="Google+" target="_blank"><i class="fa fa-google-plus"></i></a></li>
            <li><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http%3A//www.wakeriderz.com&amp;title=lake%20austin%20boat%20rentals&amp;summary=Wake%20Riderz%20provides%20boat%20rentals%20in%20lake%20austin,%20lake%20travis%20and%20lago%20vista.&amp;source=" data-tip="bottom" data-original-title="LinkedIn" target="_blank"><i class="fa fa-linkedin"></i></a></li>
          </ul>
          <p>Follow us</p>
        </div>
        <nav>
          <div id="logo">
            <a href="/"><img src="../dist/files/logo.jpg" alt="Logo"></a>
          </div>
          <div id="menu" role="toggle-ul" data-ul-id="links"><i class="fa fa-bars"></i></div>
          <ul id="links">
            <li><a class="link active" href="../">Home</a></li>
            <li><a class="link" href="../about">About</a></li>
            <li><a class="link" href="../contact">Contact</a></li>
          </ul>
        </nav>
        <main>{$html}</main>
        <footer>
          <div id="logo">
            <a href="/"><img src="../dist/files/logo.jpg" alt="Logo"></a>
          </div>
          <p>Copyright &copy; 2016 WakeRiderz. All rights reserved.</p>
          <ul id="links">
            <li><a class="link active" href="../">Home</a></li>
            <li><a class="link" href="../about">About</a></li>
            <li><a class="link" href="../contact">Contact</a></li>
          </ul>
        </footer>

      </body>
    </html>
HTML;
}