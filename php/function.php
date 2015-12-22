<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php
		function printBold($text){
			print "<b>" . $text . "</b>";
		}
		/**
		 * THIS IS COMMENT BLOCK
		 * THIS PART IS NOT VISIBLE FROM A BROWSER
		 */
		printBold("this is bold text");
		print "<br>";
		print "this is not bold text";
	 ?>

</body>
</html>