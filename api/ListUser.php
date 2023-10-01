<?php
include('Config.php');

$sql = "SELECT * FROM users";
$rs = mysqli_query($conn, $sql);

$data = array();

if (mysqli_num_rows($rs) > 0) {
    while ($row = mysqli_fetch_assoc($rs)) {
        $data[] = $row;
    }
}

mysqli_close($conn);

echo json_encode($data);
?>
