<?php
require "conn.php";

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$l = null;

$sql = "select * from users order by u_timestamp desc";
$r = mysqli_query($conn, $sql);

while($row = mysqli_fetch_assoc($r)){
    $l[] = array('data'=> array(
        'name' => $row['uname'],
        'phone' => $row['uphone'],
        'email' => $row['uemail'],
        'addr' => $row['uaddr'],
        'pin' => $row['upin'],
        'ques' => $row['question'],
        'status' => $row['status'],
        'timestamp' => $row['u_timestamp']
    ));
}
$j['children'] = $l;
$json['data'] = $j;

echo json_encode($json);