<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$cntry =filter_input(INPUT_GET,"country",FILTER_SANITIZE_STRING);
$ctxt =filter_input(INPUT_GET,"context",FILTER_SANITIZE_STRING);

$stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");


$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>
<ul>
<?php foreach ($results as $row): ?>
  <li><?= $row['name'] . ' is ruled by ' . $row['head_of_state']; ?></li>
<?php endforeach; ?>
</ul>
