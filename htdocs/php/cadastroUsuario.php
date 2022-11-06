<?php
    include_once "postBanco.php";
    // mysqli_query($db, "INSERT INTO jogos (id, nome, preco, quantidade, descricao) VALUES ('8','teste','7.89','2','um jogo')");
    
    $nome = $_POST["nome"];
    $cpf = $_POST["cpf"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    $sql = "INSERT INTO usuarios (nome, cpf, email, senha) VALUES (:nome,:cpf,:email,:senha)";
    $binding = $db->prepare($sql);
    $binding->bindParam(':nome', $nome);
    $binding->bindParam(':cpf', $cpf);
    $binding->bindParam(':email', $email);
    $binding->bindParam(':senha',  $senha);

    $binding->execute();

?>