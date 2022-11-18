let shop = document.getElementById('shop');

let shoopItemsData = [{
    id: Date.now(),
    name: "Casual Shirt",
    price: 45,
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    img: "images/img-1.jpg"
    },
    {
        id: Date.now(),
        name: "Office Shirt",
        price: 55,
        desc: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain",
        img: "images/img-2.jpg"
    },
    {
        id: Date.now(),
        name: "T Shirt",
        price: 35,
        desc: "Sed ante lacus, posuere sit amet justo sed, ultrices imperdiet nulla. Quisque aliquam rhoncus elit, in congue velit elementum et",
        img: "images/img-3.jpg"
    },
    {
        id: Date.now(),
        name: "Mens Suit",
        price: 450,
        desc: "Nunc in lectus sollicitudin, porttitor augue consectetur, aliquam eros. Nullam et pharetra ex, id pretium nisl",
        img: "images/img-4.jpg"
    }
];

let generateShop = () => {
    return (shop.innerHTML = shoopItemsData.map((product) =>{
        const {name, price, desc, img} = product;
        
        return  `
        <div class="item">
            <img width="220" src="${img}" alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>$ ${price}</h2>
                    <div class="buttons">
                        <i class="bi bi-dash-lg"></i>
                        <div class="quantity">0</div>
                        <i class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
    
        `
    }).join(""));
};
generateShop();