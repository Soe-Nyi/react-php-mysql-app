<?php
header("Content-Type: application/json");

include('Config.php');

$data = json_decode(file_get_contents("php://input"));

$id = $data->id;

$sql = "DELETE FROM users WHERE id = $id";

if (mysqli_query($conn, $sql) === TRUE) {
    echo json_encode(array("message" => "Data deleted successfully"));
} else {
    echo json_encode(array("error" => "error"));
}

mysqli_close($conn);
?>
