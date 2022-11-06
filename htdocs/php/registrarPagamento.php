<?php
    include_once "getBanco.php";

    $tipo_pagamento = $_POST['pagamento'];
    $user = '';
    $valorTotal = 0.0;

    $resultado = mysqli_query($db, "SELECT nome, logado FROM usuarios");
    while($registro = mysqli_fetch_assoc($resultado)) {
        if($registro['logado'] == 1 || $registro['logado'] == '1') {
            $user = $registro['nome'];
        }
    }

    $resultado2 = mysqli_query($db, "SELECT preco FROM carrinho_de_produtos");
    while($registro = mysqli_fetch_assoc($resultado2)) {
        $valorTotal += $registro['preco'];
    }

    date_default_timezone_set('America/Sao_Paulo');
    $data_compra = date('m/d/Y h:i:s a', time());
    mysqli_query($db, "INSERT INTO pagamentos (tipo_pagamento, data_compra, usuario, total_compra) VALUES ('$tipo_pagamento', '$data_compra', '$user', '$valorTotal')");

    // while($registro = mysqli_fetch_assoc($resultado)) {
    //     if($registro["nome"] == $tipo_pagamento) {
        
    //     $preco = $registro["preco"];
    //     $img = $registro["img"];
    //     mysqli_query($db, "INSERT INTO carrinho_de_produtos (nome,preco, quantidade, img) VALUES ('$tipo_pagamento', '$preco', '1', '$img')");

    //     $qtde = $registro["quantidade"] - 1;
    //     $id = $registro["id"];
    //     mysqli_query($db, "UPDATE jogos SET quantidade = $qtde WHERE id = $id");
    //     }
    // }
?>