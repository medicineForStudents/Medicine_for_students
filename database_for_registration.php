<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_profiles";

// Връзка с базата данни
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка за връзка
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Проверка за съществуване на POST данни
if(isset($_POST["name"], $_POST["lastname"], $_POST["email"], $_POST["password"])) {
    // Инициализиране на променливите със стойности от $_POST
    $name = $_POST["name"];
    $lastname = $_POST["lastname"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Защита от SQL инжекции
    $name = mysqli_real_escape_string($conn, $name);
    $lastname = mysqli_real_escape_string($conn, $lastname);
    $email = mysqli_real_escape_string($conn, $email);
    $password = mysqli_real_escape_string($conn, $password);

    // Хеширане на паролата преди запис в базата данни
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Заявка за вмъкване в базата данни
    $sql = "INSERT INTO users (first_name, last_name, email, password, is_admin)
    VALUES ('$name', '$lastname', '$email', '$hashed_password', 1)"; // 1 означава администратор

    if ($conn->query($sql) === TRUE) {
        echo "Успешно добавен администратор!";
    } else {
        echo "Грешка при добавянето на администратор: " . $conn->error;
    }
} else {
    echo "Грешка - липсват данни!";
}

$conn->close();
?>
