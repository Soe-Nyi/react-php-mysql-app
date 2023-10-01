<?php
header("Content-Type: application/json");

include('Config.php');

$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$email = $data->email;
$mobile = $data->mobile;

$sql = "INSERT INTO users (name, email, mobile) VALUES ('$name', '$email', '$mobile')";

if (mysqli_query($conn,$sql)) {
    $response = array('success' => true);
} else {
    $response = array('success' => false, 'error' => 'error');
}

mysqli_close($conn);

echo json_encode($response);
?>
