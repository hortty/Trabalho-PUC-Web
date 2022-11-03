window.onload = () => {
    console.log("carregou");
    fetch("php/carregarProdutos.php",{
        method: "GET",
    }).then(async (res) => {
        let data = await res.json();    
        if(data) {
            let i=0;
            while(data.length>0) {
                let img = new Image(250, 400);
                img.src = '../imgs/'+data[i].img;
                document.getElementById('imagens').appendChild(img);

                let botao = document.createElement('button');
                var text = document.createTextNode("Comprar");
                botao.appendChild(text);

                document.getElementById('imagens').appendChild(botao);
                i++;
                console.log("passou")
            }
        }
    }).catch((error) => {
        console.log("Ocorreu um erro: ", error);
    });
}