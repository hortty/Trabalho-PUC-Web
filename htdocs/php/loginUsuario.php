<?php
    include_once "getBanco.php";
    
    $nome = $_POST["nome"];
    $senha = $_POST["senha"];
    $resultado = mysqli_query($db, "SELECT nome, senha FROM usuarios");
    $validator1 = false;
    $validator2 = false;
    $result = false;

    // $contador = 0;

    while($registro = mysqli_fetch_assoc($resultado)) {
        if($nome === $registro["nome"]) {
            $validator1 = true;
        }
        if($senha === $registro["senha"]) {
            $validator2 = true;
        }
        if($validator1 && $validator2) {
            $result = true;
            break;
        }
    }

    $ObJSON = json_encode($result);
    echo $ObJSON;
?>