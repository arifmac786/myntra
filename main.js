let cartNo = []
showProducts()
displayBagIcon()

function addToCart(itemId){
 cartNo.push(itemId)
displayBagIcon()
 
}
function displayBagIcon(){
    let cart =document.querySelector(".cart")
    if(cartNo.length>0){
        cart.style.display="block"
       cart.innerText=cartNo.length;
    }else{
cart.style.display="none";
    }
}

function showProducts(){
    let itemsContainer = document.querySelector(".items-container");
let innerHtml = "";

products.forEach((product) => {
    innerHtml += `
    <div class="item">
        <img src="${product.image}" alt="">
        <div class="rating">${product.rating.stars} ⭐</div>
        <div class="company-name">${product.company}</div>
        <div class="item-name">${product.item_name}</div>
        <div class="items-details">
            <span class="final-price">₹${product.current_price}</span>
            <span class="original-price">₹${product.original_price}</span>
            <span class="discount">${product.discount_percentage}% off</span>
        </div>
         <button class="add-to-bag" onclick="addToCart(${product.id})">add to bag</button>
    </div>
    `;
});

itemsContainer.innerHTML = innerHtml;
}