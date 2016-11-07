<?php

$SERVER = '198.71.225.65:3306';
$USERNAME = 'Abhishek';
$PASSWORD = 'cityaid1';
$DB = 'DBcityaid';

$conn = mysqli_connect($SERVER, $USERNAME, $PASSWORD, $DB);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}