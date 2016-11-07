<?php
require "conn.php";

$content = null;
$title = null;
$category = null;


if(isset($_POST['content']) && isset($_POST['title']) && isset($_POST['category'])){
    $content = $_POST['content'];
    $title = $_POST['title'];
    $category = $_POST['category'];
}
$content = mysqli_real_escape_string($conn,$content);
$title = mysqli_real_escape_string($conn,$title);

$sql = "insert into news (title, post, category) values ('$title', '$content', '$category')";

if(mysqli_query($conn, $sql)){
    echo 1;
}
else{
    echo 0;
}
$conn = null;