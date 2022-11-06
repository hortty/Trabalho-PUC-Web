<?php
    include_once "getBanco.php";

    $my_json = $_GET['my_json'];
    $my_json = json_decode($my_json);

    $resultado = mysqli_query($db, "SELECT * FROM jogos");

    while($registro = mysqli_fetch_assoc($resultado)) {
        if($registro["nome"] == $my_json) {
        
        $preco = $registro["preco"];
        $img = $registro["img"];
        mysqli_query($db, "INSERT INTO carrinho_de_produtos (nome,preco, quantidade, img) VALUES ('$my_json', '$preco', '1', '$img')");

        $qtde = $registro["quantidade"] - 1;
        $id = $registro["id"];
        mysqli_query($db, "UPDATE jogos SET quantidade = $qtde WHERE id = $id");
        }
    }
?>