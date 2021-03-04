<?php

$dbhost = "";
$dbname = "";
$username = "";
$password = "";

$db = new PDO("mysql:host=$dbhost; dbname=$dbname", $username, $password);

function get_all_camps() {
	global $db;
	$camps = $db->query("SELECT * FROM camps");
	return $camps;
}

function get_all_bags() {
	global $db;
	$bags = $db->query("SELECT * FROM bags");
	return $bags;
}

function get_all_cameras() {
	global $db;
	$cameras = $db->query("SELECT * FROM cameras");
	return $cameras;
}

function get_all_lenses() {
	global $db;
	$lenses = $db->query("SELECT * FROM lenses");
	return $lenses;
}

?>