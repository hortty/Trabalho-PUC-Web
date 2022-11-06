window.onload = () => {
    fetch("php/carregarProdutos.php",{
        method: "GET",
    }).then(async (res) => {
        let data = await res.json();    
        if(data) {
            let i=0;
            while(data.length>0) {
                let preco = document.createElement('p');
                preco.innerText = "R$ " +  data[i].preco;
                preco.style.fontSize = "2rem";
                preco.style.margin = "30px 0px 2px 0px";
                preco.style.color = "#1f1f1f";
                preco.style.fontWeight = "bold";
                preco.style.fontSize = "20px";
                preco.style.fontFamily = "Gemunu Libre";

                document.getElementById('jogos').appendChild(preco);

                let img = new Image(300, 400);
                img.src = '../imgs/'+data[i].img;
                img.style.margin = "0px 0px 0.5em 0px";
                img.style.borderRadius = "8px 8px 0 0";
                img.style.margin = 0;
                img.style.border = "none";

                document.getElementById('jogos').appendChild(img);
                let botao = document.createElement('button');
                var text = document.createTextNode("Comprar");
                botao.appendChild(text);
                botao.style.width = "300px";
                botao.style.height = "50px";
                botao.style.borderRadius = "0 0 5px 5px";
                botao.style.margin = "30px 0px 100px -300px"
                botao.style.color = "aliceblue";
                botao.style.fontSize = "20px";
                botao.style.transition = "0.3s";
                botao.style.fontFamily = "Gemunu Libre";
                botao.style.backgroundColor = "#1f1f1f";
                botao.style.border = "none";

                botao.name = data[i].nome;

                img.onmouseover = () => {
                    img.style.scale = "105%";
                    img.style.transition = "0.3s";
                    img.style.cursor = "pointer";
                    botao.style.scale = "105%";
                    botao.style.transition = "0.3s";
                    botao.style.cursor = "pointer";
                }
                img.onmouseout = () => {
                    botao.style.scale = "100%";
                    botao.style.transition = "0.3s";
                    botao.style.cursor = "default";
                    img.style.scale = "100%";
                    img.style.transition = "0.3s";
                    img.style.cursor = "default";
                }

                botao.onmouseover = () => {
                    img.style.scale = "105%";
                    img.style.transition = "0.3s";
                    img.style.cursor = "pointer";
                    botao.style.scale = "105%";
                    botao.style.transition = "0.3s";
                    botao.style.cursor = "pointer";
                }

                botao.onmouseout = () => {
                    botao.style.scale = "100%";
                    botao.style.transition = "0.3s";
                    botao.style.cursor = "default";
                    img.style.scale = "100%";
                    img.style.transition = "0.3s";
                    img.style.cursor = "default";
                }

                document.getElementById('jogos').appendChild(botao);

                botao.addEventListener("click", () => {

                    if (window.XMLHttpRequest) {
                        //IE7+, Firefox, Chrome and Opera
                        xmlhttp = new XMLHttpRequest();
                    }
                    else {
                        //IE6, IE5
                        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                    }
                
                    let nomeJogo = botao.name;
                    nomeJogo = JSON.stringify(nomeJogo);
                    var url = "/php/adicionarProdutoCarrinho.php?my_json=" + nomeJogo;
                    xmlhttp.open("GET", url, true);
                    xmlhttp.send();
                });

                let espace = document.createElement('br');
                document.getElementById('jogos').appendChild(espace);
                i++;
        }
        }
    }).catch((error) => {
        console.log("Ocorreu um erro: ", error);
    });
}
