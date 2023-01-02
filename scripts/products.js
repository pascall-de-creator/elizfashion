const injectProducts = async() => {
    try{
        await fetch("../products.json")
        .then((response) => response.json())
        .then((data) => {
            try {
                const featuredProducts = document.getElementById("featured-products")
                const topProducts = document.getElementById("top-products")

                // clear all children if succesfull
                featuredProducts.innerHTML = ""
                data.featured.forEach(productIndex => {
                    const product = `
                        <a class="card" href="./product.html?product=${productIndex}">
                            <img src="${data.products[productIndex].thumbnail}" alt="${data.products[productIndex].description}">
                            <div class="desc">
                                <div>
                                    <p>${data.products[productIndex].name}</p>
                                    <p>${data.products[productIndex].description.slice(0, 20) + "..."}</p>
                                </div>
                                <p>$ ${data.products[productIndex].price.toPrecision(4)}</p>
                            </div>
                        </a> 
                    `
                    featuredProducts.innerHTML += product
                });

                // clear all children if succesfull
                topProducts.innerHTML = ""
                data.top.forEach(productIndex => {
                    const product = `
                        <a class="card" href="./product.html?product=${productIndex}">
                            <img src="${data.products[productIndex].thumbnail}" alt="${data.products[productIndex].description}">
                            <div class="desc">
                                <div>
                                    <p>${data.products[productIndex].name}</p>
                                    <p>${data.products[productIndex].description.slice(0, 20) + "..."}</p>
                                </div>
                                <p>$ ${data.products[productIndex].price.toPrecision(4)}</p>
                            </div>
                        </a> 
                    `
                    topProducts.innerHTML += product
                });
            }
            catch(e) {
                console.log(e)
            }
            try {            
                const storeProducts = document.getElementById("store-products")
                if (storeProducts) {
                    for (let productIndex = 0; productIndex < data.products.length; productIndex++) {
                        const product = `
                            <a class="card" href="./product.html?product=${productIndex}">
                                <img src="${data.products[productIndex].thumbnail}" alt="${data.products[productIndex].description}">
                                <div class="desc">
                                    <div>
                                        <p>${data.products[productIndex].name}</p>
                                        <p>${data.products[productIndex].description.slice(0, 20) + "..."}</p>
                                    </div>
                                    <p>$ ${data.products[productIndex].price.toPrecision(4)}</p>
                                </div>
                            </a> 
                        `
                        storeProducts.innerHTML += product
                    };
                }
            }
            catch(e) {
                console.log(e)
            }
        })
    }catch(e){
        console.log(e)
    }
}
injectProducts()