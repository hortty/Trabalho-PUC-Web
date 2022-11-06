
function cadastrar() {

    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let confirmarsenha = document.getElementById("confirmarsenha").value;

    let form = document.getElementById("form-cadastro");
    let dados = new FormData(form);

    if(nome == "" || senha == "" || cpf == "" || email == "" || confirmarsenha == "") {
        alert('Todos os campos devem ser preenchidos');
    } else {
        if(senha == confirmarsenha) {
            fetch("php/cadastroUsuario.php",{
                method: "POST", 
                body: dados
            }).then((res) => {
                    document.getElementById("nome").value = '';
                    document.getElementById("cpf").value = '';
                    document.getElementById("email").value = '';
                    document.getElementById("senha").value = '';
                    document.getElementById("confirmarsenha").value = '';
                    console.log(res);
                    alert("Cadastrado com sucesso!");
                    window.location.href = "login.html";
            }).catch((error) => {
                console.log("Ocorreu um erro: ", error);
            });
        }
        else {
            alert('Senhas não correspondem')
        }
    }
    
}
