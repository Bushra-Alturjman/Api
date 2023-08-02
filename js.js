const container = document.querySelector(".container") 
fetch ('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((res)=> fun(res));

    function fun(res) {
        for (let index = 1; index < res.length-1; index++) {
            const element = res[index];
            container.innerHTML += `
            <div class = "card">
                <img src = "${element.image}">
                <div class = "details">
                    <h1 class = "title"> ${element.title.substring(0,15)}</h1>
                    <div class="description">
                        <p> ${element. description.substring(0,75)}</p>
                        <span>....more</span>
                    </div>
                    <h5 class = "category">${element.category}</h5>
                    <div class = "price-iqon">
                        <p class = "price">price : ${element.price}</p>
                        <i class="fas fa-cart-plus"></i>
                    </div>
                </div>
            </div>
            `   }
        }