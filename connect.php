<?php 

$host = 'localhost';
$dbname = 'testworktrafgid';
$user = 'root';
$password = '';

$connect = new mysqli($host, $user, $password, $dbname);

if($connect){
	echo ' ';
}else{
	$connect->mysql_errno();
}


?>