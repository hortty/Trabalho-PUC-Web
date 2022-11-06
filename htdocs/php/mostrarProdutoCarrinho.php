<?php
    include_once "getBanco.php";
    
    $resultado = mysqli_query($db, "SELECT * FROM carrinho_de_produtos");

    $contador = 0;

    while($registro = mysqli_fetch_assoc($resultado)) {
        $dados[$contador]["nome"] = $registro["nome"];
        $dados[$contador]["preco"] = $registro["preco"];
        $dados[$contador]["quantidade"] = $registro["quantidade"];
        $dados[$contador]["img"] = $registro["img"];
        $contador++;
    }

    $ObJSON = json_encode($dados);
    echo $ObJSON;
?>