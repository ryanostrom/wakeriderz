<?php

date_default_timezone_set('America/Chicago');

function echo_bootstrap($html) {
  echo <<<HTML
		<html>
			<head>
				<title>WakeRiderz</title>
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
				<script src="../dist/js/app-min.js"></script>
				<link rel="stylesheet" href="../dist/css/app.min.css" type="text/css">
				<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
			</head>
			<body>
			  <nav>
			    <div id="logo">
			      <a href="/"><img src="/dist/files/logo.jpg" alt="Logo"></a>
			    </div>
			    <div id="header-links">
			      <div id="header-links-inner">
			        <ul class="menu">
			          <li class="active link"><a href="/">Home</a></li>
			          <li class="link"><a href="/contacts/">Contacts</a></li>
			          <li class="link"><a href="/resources/">Resources</a></li>
			          <li class="link"><a href="/lakeaustinboatrentals/">Services</a></li>
			        </ul>
			      </div>
			    </div>
			  </nav>
		    <main>{$html}</main>
			</body>
		</html>
HTML;
}