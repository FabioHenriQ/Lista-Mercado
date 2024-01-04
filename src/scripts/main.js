const itemList = [];
const buttonSend = document.querySelector("#buttonSend");
const inputPrice = document.querySelector("#price");
const inputItem = document.querySelector("#item");
const ulItems = document.querySelector(".list");

buttonSend.addEventListener('click', addItemList)

function addItemList() {
    if(inputItem.value && inputPrice.value) {
        itemList.push({
            name: inputItem.value,
            price: parseFloat(inputPrice.value).toFixed(2).replace('.',',')
        });

        ulItems.innerHTML = ""
        itemList.map((item)=>{
            ulItems.innerHTML += `<li class="item">
                                    <p class="itemList">${item.name}</p>
                                    <p class="priceList">R$${item.price}</p>
                                    <button onclick="removeItem(${item})">Apagar</button>
                                </li>`

        })

    } else if (inputItem.value && inputPrice.value == '') {
        alert('insira um valor no preço');
    } else if (inputPrice.value && inputItem.value == '') {
        alert('insira um item');
    } else {
        alert('insira um item e um valor');
    }
}

function removeItem(item) {

    itemList.splice(item)
    ulItems.innerHTML = "";
    ulItems.innerHTML += `<li class="item">
                                <p class="itemList">${item.name}</p>
                                <p class="priceList">R$${item.price}</p>
                                <button onclick="removeItem()">Apagar</button>
                            </li>`
}

