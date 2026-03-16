import { products } from  "../jscode/products.js";
import {cart } from "../jscode/cart/cart.js";
import { deliveryDateUpdate } from "./cart/deliverydate.js";
import { changelanguage } from "./country.js";
let productContainer=document.querySelector('.product-container');
    products.forEach((product)=>
    { 
      productContainer.innerHTML +=`
       
            <div class="extra-container">
                <div class="product-image-container">
                     <img class="product-image" src="${product.image}">
                    </div>
               <div class="products-name-container">
                 <p class="product-name">
                ${product.name}
                </p>
                </div>
                <p>
                     <i class="fa-solid fa-indian-rupee-sign"></i> -<span class="product-price-text">${product.price}</span>
                </p>
               <div class="rating-review-container">
                <img class="rating-image" src="../ratings/rating-${Math.round(product.rating)*10}.png"><span class="reviews-text"> (${product.reviews}) </span>
                </div>
                 <button class="add-to-cart-button js-add-to-cart"
                 data-id="${product.id}">Add-To-Cart </button>
            </div> 
      `;
    });

    let flagContainer=document.querySelector('.language-block');
     flagContainer.innerHTML=
    `<img  class="indian-flag" src="../pictures/indian-flag.png">
              <select name="country" class="language-box">
                <option value="Inr">
                    Inr
                </option>
                <option value="En" >En</option>
                <option value="Chi">Yen</option>
              </select>`;
              document.querySelector('.language-box')
.addEventListener('change', changelanguage);
             
;
let CartButton=document.querySelectorAll('.js-add-to-cart');
   CartButton.forEach((button)=>{
   button.addEventListener('click', ()=>{
    const productId=button.dataset.id;
    let selectedProduct
    cart.forEach((item)=>{
    if(item.id===productId)
    {
        selectedProduct=item;
    }
    })
    if(selectedProduct)
    {
        selectedProduct.quantity+=1;
    }
    else
    {
    const productData=products.find((product)=>{
        return product.id===productId
    })

    const newProduct={
        ...productData,
        quantity:1
    }
    cart.push(newProduct);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    let totalQuantity = 0;

cart.forEach((item)=>{
    totalQuantity += item.quantity;
});

if(cart.length === 0){
    document.querySelector('.cart-quantity').innerText = 0;
}else{
    document.querySelector('.cart-quantity').innerText = totalQuantity;
}
  deliveryDateUpdate(); })
   });
CartButton.forEach((button)=>{
    button.addEventListener('click',()=>{
        button.innerHTML=`<i class="fa fa-check" aria-hidden="true"></i> Added`;
        button.classList.add('added');
        setTimeout(() => {
    button.innerHTML='Add-to-cart';
    button.classList.remove('added');
    
}, 1000);
    });
});
let totalQuantity = 0;

cart.forEach((item)=>{
    totalQuantity += item.quantity;
});

if(cart.length === 0){
    document.querySelector('.cart-quantity').innerText = 0;
}else{
    document.querySelector('.cart-quantity').innerText = totalQuantity;


   
 
