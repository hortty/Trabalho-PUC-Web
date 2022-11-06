<?php
$con = "mysql:host=localhost;dbname=teste";
$usuario = "root";
$senha = "";

try {
    $db = new PDO($con, $usuario, $senha);
    
} catch(PDOException $erro) {
    echo $erro->getMessage();
    exit();
}

?>