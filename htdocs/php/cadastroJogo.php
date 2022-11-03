<?php
    include_once "postBanco.php";
    // mysqli_query($db, "INSERT INTO jogos (id, nome, preco, quantidade, descricao) VALUES ('8','teste','7.89','2','um jogo')");

    $id = 3;
    $nome = "nome"
    $preco = 150;
    $quantidade = 4;
    $descricao = "uma descricao.."

    $sql = "INSERT INTO jogos (id, nome, preco, quantidade, descricao) VALUES (:id,:nome,:preco,:quantidade,:descricao)";
    $binding = $db->prepare($sql);
    $binding->bindParam(':id', $id);
    $binding->bindParam(':nome', $nome);
    $binding->bindParam(':preco', $preco);
    $binding->bindParam(':quantidade', $quantidade);
    $binding->bindParam(':descricao',  $descricao);

    $binding->execute();
?>