window.onload = () => {
    document.getElementById("qrnumber").innerText = "Número do pedido: " + (Math.floor(Math.random() * (99999999 - 11111111)) + 11111111);
}

function efetuarPagamentoCartao() {
    
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let numero_cartao = document.getElementById("numero-cartao").value;
    let cvv = document.getElementById("cvv").value;
    
    console.log(cpf);

if(nome !== "" && numero_cartao !== "" && cpf !== "" && sobrenome !== "" && cvv !== "") {
    if(cpf.length > 10) {
        let form = document.getElementById("form-pagamento");
        let dados = new FormData(form);
    
        console.log(dados);
        fetch("php/registrarPagamento.php",{
            method: "POST", 
            body: dados
        }).then(() => {

            document.getElementById("nome").innerText = '';
            document.getElementById("sobrenome").innerText = '';
            document.getElementById("cpf").innerText = '';
            document.getElementById("numero-cartao").innerText = '';
            document.getElementById("cvv").innerText = '';

            fetch("php/resetarCarrinho.php",{
                method: "GET",
            }).catch((error) => {
                console.log("Ocorreu um erro: ", error);
            });

            alert("Compra realizada com sucesso!");

            window.location.href = "index.html";

        }).catch((error) => {
            console.log("Ocorreu um erro: ", error);
        });
    }
    else {
        alert("CPF Inválido!");
    }
}
else {
    alert("Por favor, preencha corretamente os campos!");
}
}

function clicarPix() {
    document.getElementById("pagamento-pix").checked = true;
    document.getElementById("container-pag").classList.remove("hidden");
    document.getElementById("perguntaPix").classList.remove("hidden");

    document.getElementById("cartao").classList.add("hidden");
}

function clicarCartao() {
    document.getElementById("pagamento-cartao").checked = true;
    document.getElementById("container-pag").classList.remove("hidden");
    document.getElementById("pix").classList.add("hidden");
    document.getElementById("perguntaPix").classList.add("hidden");
    document.getElementById("cartao").classList.remove("hidden");
}

function confirmarPix() {
    document.getElementById("perguntaPix").classList.add("hidden");
    document.getElementById("pix").classList.remove("hidden");

    let form = document.getElementById("forma-pagamento");
    let dados = new FormData(form);

        fetch("php/registrarPagamento.php",{
            method: "POST",
            body: dados
        }).then(() => {

            fetch("php/resetarCarrinho.php",{
                method: "GET",
            }).catch((error) => {
                console.log("Ocorreu um erro: ", error);
            });

            alert("Compra realizada com sucesso!");

        }).catch((error) => {
            console.log("Ocorreu um erro: ", error);
        });

}