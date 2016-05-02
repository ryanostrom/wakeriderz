<?php

date_default_timezone_set('America/Chicago');

function echo_bootstrap($html) {
  echo <<<HTML
		<html>
			<head>
				<title></title>
				<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
				<script src="../dist/js/app-min.js"></script>
				<link rel="stylesheet" href="../dist/css/app.min.css" type="text/css">
				<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
			</head>
			<body>
		    <main>{$html}</main>
			</body>
		</html>
HTML;
}