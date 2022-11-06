window.onload = () => {

    fetch("php/mostrarProdutoCarrinho.php",{
        method: "GET",
    }).then(async (res) => {
        let data = await res.json();    
        let tbody = document.getElementById("tbody")
        tbody.innerText = ''
        let valorTotal = 0;
        let quantidadeItens = 0;
        if(data) {
            let i=data.length-1;
            while(i>=0) {
            document.getElementById("container-carrinho").classList.remove("hidden");

            let tr = tbody.insertRow()

            
            let colunaImagem = tr.insertCell()
            colunaImagem.width = "300px";
            let img = document.createElement("img")
            img.src = "imgs/" + data[i].img
            img.style.width = "150px";
            img.style.height = "200px";
            colunaImagem.appendChild(img)

            // vertical-align: middle;
            // text-align: center;
            // width: 150px;
        
            let colunaNome = tr.insertCell()
            colunaNome.innerText = data[i].nome;
            colunaNome.style.width = "200px";

            let colunaValor = tr.insertCell()
            colunaValor.innerText = data[i].preco;
            colunaValor.style.width = "200px";

            valorTotal += parseInt(data[i].preco);
            i--;
            quantidadeItens++;
            }
            quantidadeItens;
            document.getElementById("valorItens").innerText = "R$"
            document.getElementById("valorItens").innerText += valorTotal
            document.getElementById("quantidadeItens").innerText = "Itens: "
            document.getElementById("quantidadeItens").innerText += quantidadeItens
        }
    }).catch((error) => {
        console.log("Ocorreu um erro: ", error);
    });

}

function limparCupom() {
    alert("Cupom  " + document.getElementById("limparCupom").value + "  aplicado com sucesso!");
    document.getElementById("limparCupom").value = '';
}

function finalizarCompra() {
    document.getElementById("container-carrinho").classList.add("hidden");
}