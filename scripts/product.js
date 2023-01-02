const productIndex = location.search.split("=")[1]

const injectProduct = async() => {
    try{
        await fetch("../products.json")
        .then((response) => response.json())
        .then((data) => {        
            const productImg = document.getElementById("product-img")
            const productName = document.getElementById("product-name")
            const productCategory = document.getElementById("product-category")
            const productRating = document.getElementById("product-rating")
            const productDescription = document.getElementById("product-description")
            const productprice = document.getElementById("product-price")

            productImg.style.backgroundImage = `url("${data.products[productIndex].image}")`
            productName.innerText = `${data.products[productIndex].name}`
            productCategory.innerText = `${data.products[productIndex].category}`
            productDescription.innerText = `${data.products[productIndex].description}`
            productprice.innerText = `${data.products[productIndex].price.toPrecision(3)}`
            productRating.innerHTML = ""

            const fullStar = `<svg class="active" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
            const emptyStar = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`

            for (let stars = 0; stars < 5; stars++) {
                if (stars <= data.products[productIndex].rating) {
                    productRating.innerHTML += fullStar
                }
                else {
                    productRating.innerHTML += emptyStar
                }
            }
        })  
    }
    catch(e){
        console.log(e)
    }
}
injectProduct()