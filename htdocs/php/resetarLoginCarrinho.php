<?php
    include_once "getBanco.php";
    
    $resultado = mysqli_query($db, "SELECT id, logado FROM usuarios");
    mysqli_query($db, "DELETE FROM carrinho_de_produtos");

    while($registro = mysqli_fetch_assoc($resultado)) {
        $id = $registro['id'];
        $logado = 0;
        mysqli_query($db, "UPDATE usuarios SET logado = '$logado' WHERE id = '$id'");
    }

?>