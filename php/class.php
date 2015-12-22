<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>php class example</title>
</head>
<body>
	<?php
		class Printer{
			public $string;

			function __construct($string)
			{
				$this -> string = $string;
			}

			function printBold(){
				print "<b>" . $this -> string . "</b>";
			}
		}// end of class Print

		$printer = new Printer("string 1");
		$printer -> printBold();

		$printer2 = new Printer("string 2");
		$printer2 -> printBold();

	 ?>
</body>
</html>