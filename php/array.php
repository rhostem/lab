<!DOCTYPE html>
<html>
<body>

<div>
	<?php
	$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
	$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
	asort($age);

	foreach($age as $x => $x_value) {
	     echo "<p>" . "Key=" . $x . ", Value=" . $x_value . "</p>";
	     // echo "<br>";
	}
?>
</div>
</body>
</html>