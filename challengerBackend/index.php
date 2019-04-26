<?php

require_once("curl.php");
header("Content-Type: application/json; charset=UTF-8");
$API = new API;

echo $API->findAll();

?>
