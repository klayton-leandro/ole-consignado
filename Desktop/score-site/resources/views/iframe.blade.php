
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Valor Promocional</title>
	<link rel="stylesheet"
	      href='//fonts.googleapis.com/css?family=Oswald'>
<script type="text/javascript" src="//code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript" src="./static/js-cont/jquery.plugin.js"></script>
<script type="text/javascript" src="./static/js-cont/jquery.countdown.js"></script>
<script type="text/javascript" src="./static/js-cont/jquery.cookie.js"></script>
<script type="text/javascript" src="./static/js-cont/moment.js"></script>
<script type="text/javascript">
	$(window).load(function () {

		// Check if date has been passed:
		var checkIfExpiedOnLoad = setInterval(function () {
			console.log($(".countdown-amount").text());

			if ($(".countdown-amount").text() == "000") {
				// run onexpirey fn
				liftOff();
				clearInterval(checkIfExpiedOnLoad);
			} else {
				clearInterval(checkIfExpiedOnLoad);
			}

		}, 500);

		var ontick_cb = function () {
			window.parent.document.getElementById(window.name).style.height = document.getElementById('until2d').scrollHeight + 'px';
		};


		
		$('#until2d').countdown({
			until: '+0d +20h +59m',
			onExpiry: liftOff,
			alwaysExpire: true,
			labels: ['Years', 'Months', 'Weeks', 'Dias', ' Horas', ' Minutos', ' Segundos'],
			labels1: ['Year', 'Month', 'Week', 'Dia', ' Hora', ' Minutos', ' Segundos'],
			onTick: ontick_cb,
			format: 'dhmS'
		});

		function liftOff() {
			
														}

		

	});
</script>
<style type="text/css">

body {
	background: none;
	color: #444;
	font: normal 16px "Oswald", sans-serif;
	margin: 0;
}

ul.countdown {
	list-style: none;
	margin: 0 0;
	padding: 0;
	display: block;
	text-align: center;
}

ul.countdown li {
	display: inline-block;
	margin: 0 5px;
	padding: 10px 10px;
	background: #eee;
	border: 3px solid #ccc;
	border-radius: 10px;
	width: 90px;
}

ul.countdown li span {
	font-size: 67px;
	font-weight: 300;
	font-weight: bold;
	line-height: 67px;
}

ul.countdown li p {
	opacity: .9;
	font-size: 17px;
	padding: 0;
	margin: 0;
}

#expired {
	padding: 15px;
	text-align: center;
	border-radius: 10px;
}

ul.countdown li, #expired {
	background: #FE3939;
	border: 3px solid #C72D2D;
	color: #fff;
}









/*medium*/
ul.countdown li span {
	font-size: 67px;
	line-height: 67px;
}

ul.countdown li p {
	font-size: 17px;
}



a {
	color: #76949F;
	text-decoration: none;
}

a:hover {
	text-decoration: underline;
}

.source {
	width: 405px;
	margin: 0 auto;
	background: #4f5861;
	color: #a7abb1;
	font-weight: bold;
	display: block;
	white-space: pre;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
}

.btn {
	background: #f56c4c;
	margin: 40px auto;
	padding: 12px;
	display: block;
	width: 100px;
	color: white;
	text-align: center;
	text-transform: uppercase;
	font-weight: bold;
	text-decoration: none;
	-webkit-border-radius: 2px;
	-moz-border-radius: 2px;
	border-radius: 2px;
}

.btn:hover {
	text-decoration: none;
	opacity: .7;
}

</style>

</head>
<body>
	<ul id="until2d" class="countdown"></ul>

	<div id="expired" style="display: none">
			</div>
</body>
</html>