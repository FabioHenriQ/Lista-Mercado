var items = [];
var soma = 0;

document.querySelector("span").innerHTML = `R$${soma}`;
document.querySelector("input[name=enviar]").addEventListener('click', ()=>{
    
    let nomeProduto = document.querySelector("input[type=text]").value;
    let valorProduto = document.querySelector("input[type=number]").value;

    if(nomeProduto && valorProduto){
        items.push({
            nome: nomeProduto,
            valor: parseFloat(valorProduto).toFixed(2)
        });
    
        var listaProdutos = document.querySelector(".lista-produtos");
        listaProdutos.innerHTML = "";
        soma = 0
    
    
    
        items.map((item)=>{
            soma += parseFloat(item.valor);
            parseFloat(item.valor);
            listaProdutos.innerHTML +=`
            
            <div class="produto">
                <p>`+item.nome+`</p>
                <p class="preco">R$`+item.valor.replace('.',',')+`</p>
            </div>
            <hr>
            `
        });

        document.querySelector("input[name=enviar]").classList.add('certo');
        setTimeout(()=>{
            document.querySelector("input[name=enviar]").classList.remove('certo');
        },2000);
    
    
        document.querySelector("span").innerHTML = `R$${soma.toFixed(2).replace('.',',')}`;
    
        document.querySelector("input[type=text]").value = null;
        document.querySelector("input[type=number]").value = null;
    
    } else {
        document.querySelector("input[name=enviar]").classList.add('errado');
        setTimeout(()=>{
            document.querySelector("input[name=enviar]").classList.remove('errado');
        },500);
    }
        
});

document.querySelector(".limpar").addEventListener('click', ()=>{
    soma = 0;
    items = [];
    document.querySelector("span").innerHTML = `R$${soma}`;
    document.querySelector(".lista-produtos").innerHTML = "";
})