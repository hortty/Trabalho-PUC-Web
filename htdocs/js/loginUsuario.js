window.onload = () => {
    fetch("php/resetarLoginCarrinho.php",{
        method: "GET",
    }).catch((error) => {
        console.log("Ocorreu um erro: ", error);
    });
}

function logarUsuario() {

    console.log("teste");

    let form = document.getElementById("form-login");
    let dados = new FormData(form);

    fetch("php/loginUsuario.php",{
        method: "POST",
        body: dados
    }).then(async (res) => {
        let data = await res.json();    
        if(data) {
            window.location.href = "index.html";
        }
        else {
            alert('Usuário ou senha não conferem!')
        }
    }).catch((error) => {
        console.log("Ocorreu um erro: ", error);
    });

}
