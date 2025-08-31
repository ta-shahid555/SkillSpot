// document.addEventListener('DOMContentLoaded', () => {
//   const cartItems = document.querySelector('.cart-items');
//   const cartTotal = document.querySelector('.cart-total');
//   const cartActions = document.querySelector('.cart-actions');
//   const emptyCartMessage = document.querySelector('.empty-cart');

//   function updateTotal() {
//     const items = document.querySelectorAll('.cart-item');
//     let total = 0;

//     items.forEach(item => {
//       const priceStr = item.querySelector('.price').textContent.replace('₹', '').replace(/,/g, '');
//       const price = parseFloat(priceStr);
//       const quantity = parseInt(item.querySelector('.quantity').textContent);
//       total += price * quantity;
//     });

//     cartTotal.innerHTML = `<strong>Total:</strong> ₹${total.toLocaleString('en-IN')}`;
//   }

//   function checkEmptyCart() {
//     if (document.querySelectorAll('.cart-item').length === 0) {
//       cartItems.style.display = 'none';
//       cartTotal.style.display = 'none';
//       cartActions.style.display = 'none';
//       emptyCartMessage.style.display = 'block';
//     } else {
//       cartItems.style.display = 'flex';
//       cartTotal.style.display = 'block';
//       cartActions.style.display = 'flex';
//       emptyCartMessage.style.display = 'none';
//     }
//   }

//   function addEventListeners() {
//     // Remove buttons
//     document.querySelectorAll('.remove-btn').forEach(btn => {
//       btn.addEventListener('click', () => {
//         const item = btn.closest('.cart-item');
//         item.remove();
//         updateTotal();
//         checkEmptyCart();
//       });
//     });

//     // Wishlist buttons
//     document.querySelectorAll('.wishlist-btn').forEach(btn => {
//       btn.addEventListener('click', () => {
//         const item = btn.closest('.cart-item');
//         item.remove();
//         alert('Course moved to Wishlist!');
//         updateTotal();
//         checkEmptyCart();
//       });
//     });

//     // Quantity increase buttons
//     document.querySelectorAll('.qty-increase').forEach(btn => {
//       btn.addEventListener('click', () => {
//         const quantityElem = btn.previousElementSibling;
//         let qty = parseInt(quantityElem.textContent);
//         qty++;
//         quantityElem.textContent = qty;
//         updateTotal();
//       });
//     });

//     // Quantity decrease buttons
//     document.querySelectorAll('.qty-decrease').forEach(btn => {
//       btn.addEventListener('click', () => {
//         const quantityElem = btn.nextElementSibling;
//         let qty = parseInt(quantityElem.textContent);
//         if (qty > 1) {
//           qty--;
//           quantityElem.textContent = qty;
//           // updateTotal();A
//         }
//       });
//     });
//   }

//   // Initial setup
//   updateTotal();
//   checkEmptyCart();
//   addEventListeners();
// });
// const CART_KEY = 'skillspot_cart';

// function getCart(){
//   try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
//   catch(e){ return []; }
// }

// function setCart(items){
//   localStorage.setItem(CART_KEY, JSON.stringify(items));
// }

// function addItemToCart({title, price, img}){
//   const cart = getCart();
//   const idx = cart.findIndex(i => i.title === title);
//   if(idx > -1){
//     cart[idx].qty = (cart[idx].qty || 1) + 1;
//   } else {
//     cart.push({ title, price: Number(price)||0, img, qty: 1 });
//   }
//   setCart(cart);
// }

// // === Recommended buttons handler ===
// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('.add-to-cart').forEach(btn => {
//     btn.addEventListener('click', () => {
//       const {title, price, img} = btn.dataset;
//       addItemToCart({ title, price, img });

//       // chhoti si feedback + redirect
//       btn.textContent = "Added!";
//       setTimeout(() => {
//         window.location.href = "cart.html";
//       }, 300);
//     });
//   });
// });









const CART_KEY = "skillspot_cart";

// ---------- LocalStorage Helpers ----------
function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];
  }
}
function setCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
}
function addItemToCart({ title, price, img }) {
  const cart = getCart();
  const idx = cart.findIndex((i) => i.title === title);
  if (idx > -1) {
    cart[idx].qty = (cart[idx].qty || 1) + 1;
  } else {
    cart.push({ title, price: Number(price) || 0, img, qty: 1 });
  }
  setCart(cart);
}

// ---------- Render Cart on Cart Page ----------
function renderCart() {
  const cartItemsContainer = document.querySelector(".cart-items");
  const cartTotalElem = document.querySelector(".cart-total");
  const cartActions = document.querySelector(".cart-actions");
  const emptyCartMessage = document.querySelector(".empty-cart");

  if (!cartItemsContainer) return; // agar cart.html pe nahi ho

  const cart = getCart();
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.style.display = "none";
    cartTotalElem.style.display = "none";
    cartActions.style.display = "none";
    emptyCartMessage.style.display = "block";
    return;
  }

  cartItemsContainer.style.display = "flex";
  cartTotalElem.style.display = "block";
  cartActions.style.display = "flex";
  emptyCartMessage.style.display = "none";

  let total = 0;

  cart.forEach((item, idx) => {
    total += item.price * item.qty;

    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <img src="${item.img}" alt="${item.title}" class="course-img" />
      <div class="item-details">
        <h2>${item.title}</h2>
        <span class="price">₹${item.price}</span>
        <div class="item-actions">
          <div class="quantity-controls">
            <button class="qty-decrease">−</button>
            <span class="quantity">${item.qty}</span>
            <button class="qty-increase">+</button>
          </div>
          <button class="remove-btn">Remove</button>
          <button class="wishlist-btn">🔄 Move to Wishlist</button>
        </div>
      </div>
    `;

    // Quantity increase
    div.querySelector(".qty-increase").addEventListener("click", () => {
      item.qty++;
      setCart(cart);
      renderCart();
    });

    // Quantity decrease
    div.querySelector(".qty-decrease").addEventListener("click", () => {
      if (item.qty > 1) {
        item.qty--;
        setCart(cart);
        renderCart();
      }
    });

    // Remove item
    div.querySelector(".remove-btn").addEventListener("click", () => {
      cart.splice(idx, 1);
      setCart(cart);
      renderCart();
    });

    // Wishlist (simple remove + alert)
    div.querySelector(".wishlist-btn").addEventListener("click", () => {
      cart.splice(idx, 1);
      setCart(cart);
      alert("Course moved to Wishlist!");
      renderCart();
    });

    cartItemsContainer.appendChild(div);
  });

  cartTotalElem.innerHTML = `<strong>Total:</strong> ₹${total.toLocaleString("en-IN")}`;
}

// ---------- Add-to-Cart Buttons (on every page) ----------
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".add-to-cart").forEach(btn => {
    btn.addEventListener("click", () => {
      const title = btn.dataset.title;
      const price = btn.dataset.price;
      const img = btn.dataset.img;

      if (!title || !price || !img) {
        console.error("Missing dataset values:", { title, price, img });
        return;
      }

      addItemToCart({ title, price, img });

      btn.textContent = "Added!";
      setTimeout(() => {
        window.location.href = "cart.html";
      }, 300);
    });
  });

  // agar cart page pe hain toh render kar do
  renderCart();
});




