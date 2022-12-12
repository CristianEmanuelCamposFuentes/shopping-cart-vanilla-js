let shop = document.getElementById('shop');

let shopItemsData = [{
    id: 'uno',
    name: "Casual Shirt",
    price: 45,
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    img: "images/img-1.jpg"
    },
    {
        id: 'dos',
        name: "Office Shirt",
        price: 55,
        desc: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain",
        img: "images/img-2.jpg"
    },
    {
        id: 'tres',
        name: "T Shirt",
        price: 35,
        desc: "Sed ante lacus, posuere sit amet justo sed, ultrices imperdiet nulla. Quisque aliquam rhoncus elit, in congue velit elementum et",
        img: "images/img-3.jpg"
    },
    {
        id: 'cuatro',
        name: "Mens Suit",
        price: 450,
        desc: "Nunc in lectus sollicitudin, porttitor augue consectetur, aliquam eros. Nullam et pharetra ex, id pretium nisl",
        img: "images/img-4.jpg"
    }
];

let basket = [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) =>{
        let {id, name, price, desc, img} = x;
        
        return  `
        <div id="product-id-${id} "class="item">
            <img width="220" src="${img}" alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>$ ${price}</h2>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">0</div>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
    
        `;
    })
    .join(""));
};

generateShop();

let increment = (id) => {
    let selectedItem = id;
    // console.log(id);
    let search = basket.find((x)=> x.id === selectedItem.id);
    // console.log(search);
    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1
        });
    } else {
        search.item += 1;
    }

    
    // console.log(basket);
    update(selectedItem.id);
}

let decrement = (id) => {
    let selectedItem = id;
    // console.log(id);
    let search = basket.find((x)=> x.id === selectedItem.id);
    // console.log(search);
    if(search.item === 0){
        return;
    } else {
        search.item -= 1;
    }

    
    // console.log(basket);
    update(selectedItem.id);

}

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerText = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerText = basket.map(num => num.item).reduce((accum, next) => accum + next, 0);

}