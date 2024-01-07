let itemList = [];
let total;
const buttonSend = document.querySelector("#buttonSend");
const totalBox = document.querySelector(".total");
const inputPrice = document.querySelector("#price");
const inputItem = document.querySelector("#item");
const ulItems = document.querySelector(".list");

buttonSend.addEventListener('click', addItemList);

function addItemList() {
    if(inputItem.value && inputPrice.value) {
        itemList.push({
            name: inputItem.value,
            price: parseFloat(inputPrice.value).toFixed(2).replace('.',',')
        });
        total = 0;

        inputItem.value = '';
        inputPrice.value = '';

        ulItems.innerHTML = ""
        itemList.map((item)=>{
            total += parseFloat(item.price);
            ulItems.innerHTML += `<li class="item">
                                    <p class="itemList">${item.name}</p>
                                    <p class="priceList">R$${item.price}</p>
                                </li>`

        })
        totalBox.innerHTML = parseFloat(total).toFixed(2).replace('.',',');

    } else if (inputItem.value && inputPrice.value == '') {
        alert('insira um valor no preço');
    } else if (inputPrice.value && inputItem.value == '') {
        alert('insira um item');
    } else {
        alert('insira um item e um valor');
    }
}

function clearList() {
    total = 0;
    totalBox.innerHTML = '0,00';
    inputItem.value = '';
    inputPrice.value = '';
    itemList = [];
    ulItems.innerHTML = '';
}

