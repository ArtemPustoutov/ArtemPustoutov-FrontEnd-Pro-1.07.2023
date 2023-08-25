let data =  {
    drink: [
        {id:'A441',name:'Pepsi',category:'Soft Drink', price:15, quantity:2},
        {id:'B234',name:'Coke', category:'Soft Drink', price:10, quantity:8},
        {id:'A617',name:'Mirinda', category:'Soft Drink', price:20, quantity:20},
        {id:'B003',name:'Sprite', category:'Soft Drink', price:16, quantity:5},
        {id:'B225',name:'Minute Maid', category:'Soft Drink', price:25, quantity:12},
        {id:'B388',name:'Appy', category:'Soft Drink', price:35, quantity:9}
    ],
    choco: [
        {id:'A742',name:'5Star', category:'Chocloate', price:10, quantity:3},
        {id:'A899',name:'Gems', category:'Chocloate', price:12, quantity:11},
        {id:'B635',name:'KitKat', category:'Chocloate', price:15, quantity:7},
        {id:'B408',name:'Perk', category:'Chocloate', price:8, quantity:15},
        {id:'A354',name:'Dairy Milk', category:'Chocloate', price:30, quantity:4}
    ]
}
let div = document.createElement('div');
div.classList.add('block-holder');
let product = document.createElement('div');
product.classList.add('product');
let list = document.createElement('div');
list.classList.add('list');
let info = document.createElement('div');
info.classList.add('info');
document.body.appendChild(div);
div.append(product, list, info);

let  ul = `
    <ul>
        <li><button class="btn" data-data-id="drink">drink</button></li>
        <li><button class="btn" data-data-id="choco">choco</button></li>
    </ul>
`;
product.innerHTML = ul;
function clear() {
    location.reload()
}

let buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
      let productId = button.dataset.dataId;
      let productList = data[productId];
      let productNames = productList.map(product => product.name);
      list.textContent = '';
      productNames.forEach(name => {
        let li = document.createElement('li');
        li.textContent = name;
        list.appendChild(li);
  
        let buyButton = document.createElement('button');
        buyButton.textContent = 'Купить';
        buyButton.addEventListener('click', () => {
        let productInfo = productList.find(product => product.name === name);
        alert(`Вы купили ${productInfo.name}!`);
        clear()
        });
  
        let card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
        <h2>${name}</h2>
        <p>ID:${productList.find(product => product.name === name).id}
        <p>Count: ${productList.find(product => product.name === name).price}</p>
        <p>Quality: ${productList.find(product => product.name === name).quantity}</p>
        `;
        card.appendChild(buyButton);
  
        li.addEventListener('click', () => {
        info.textContent = '';
        info.appendChild(card);
        });
      });
    });
})

