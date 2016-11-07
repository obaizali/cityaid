<?php

require "conn.php";

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$l = null;

$sql = "select * from news order by ptimestamp desc";
$r = mysqli_query($conn, $sql);

while($row = mysqli_fetch_assoc($r)){
    $l[] = array('data'=> array(
        'title' => $row['title'],
        'post' => $row['post'],
        'category' => $row['category'],
        'timestamp' => $row['ptimestamp']
    ));
}
$j['children'] = $l;
$json['data'] = $j;

echo json_encode($json);