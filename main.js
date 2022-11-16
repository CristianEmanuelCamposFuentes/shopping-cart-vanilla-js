let shop = document.getElementById('shop');

let shoopItemsData = [{
    id: Date.now(),
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem impsum dolor sit amet",
    img: "images/img-1.jpg"
    },
    {
        id: Date.now(),
        name: "Office Shirt",
        price: 55,
        desc: "Lorem impsum dolor sit amet",
        img: "images/img-2.jpg"
    },
    {
        id: Date.now(),
        name: "T Shirt",
        price: 35,
        desc: "Lorem impsum dolor sit amet",
        img: "images/img-3.jpg"
    },
    {
        id: Date.now(),
        name: "Mens Suit",
        price: 450,
        desc: "Lorem impsum dolor sit amet",
        img: "images/img-4.jpg"
    }
];

let generateShop = () => {
    return shop.innerHTML = `
    <div class="item">
        <img width="220" src="images/img-1.jpg" alt="">
        <div class="details">
            <h3>Casual Shirt</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            <div class="price-quantity">
                <h2>$45</h2>
                <div class="buttons">
                    <i class="bi bi-dash-lg"></i>
                    <div class="quantity">0</div>
                    <i class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>

    `
}
generateShop();