<?php
require "conn.php";

$paper = null;
$out = "";

if(isset($_POST['paper'])){
    $paper = $_POST['paper'];
}

$sql = "select tcontent from tn where tname = '$paper'";
$r = mysqli_query($conn, $sql);
if(mysqli_num_rows($r) > 0){
    while($row = mysqli_fetch_assoc($r)){
        $out = $row['tcontent'];
    }
    echo $out;
}
else{
    echo "";
}