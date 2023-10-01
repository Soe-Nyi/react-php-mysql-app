<?php
header("Content-Type: application/json");

include('Config.php');

$id = $_GET['id']; 

$sql = "SELECT * FROM users WHERE id = $id";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) === 1) {
    $row = mysqli_fetch_assoc($result);
    echo json_encode($row);
} else {
    echo json_encode(array("error" => "Item not found"));
}

mysqli_close($conn);
?>
