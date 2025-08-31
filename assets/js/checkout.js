const CART_KEY = 'skillspot_cart';

function getCart() {
  try { 
    return JSON.parse(localStorage.getItem(CART_KEY)) || []; 
  } catch(e) { 
    return []; 
  }
}

function formatCurrency(n) {
  return '₹' + Number(n || 0).toLocaleString();
}

function renderOrderSummary() {
  const box = document.getElementById('order-summary');
  if (!box) return;

  const cart = getCart();
  if (cart.length === 0) {
    box.innerHTML = `<p>No items yet. <a href="cart.html">Go back</a></p>`;
    return;
  }

  let subtotal = 0;
  const rows = cart.map(item => {
    // ✅ make sure price is number only (remove $ sign if exists)
    const price = parseFloat(item.price.toString().replace(/[^0-9.]/g, "")) || 0;
    const lineTotal = price * (item.qty || 1);

    subtotal += lineTotal;

    return `
      <div class="os-row">
        <img src="${item.img}" alt="" width="60">
        <div class="os-info">
          <strong>${item.title}</strong>
          <span>Qty: ${item.qty}</span>
        </div>
        <div class="os-price">${formatCurrency(lineTotal)}</div>
      </div>
    `;
  }).join('');

  box.innerHTML = `
    ${rows}
    <hr>
    <div class="os-total">
      <span>Total</span>
      <span>${formatCurrency(subtotal)}</span>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', renderOrderSummary);


document.addEventListener("DOMContentLoaded", function () {
  const checkoutBtn = document.getElementById("checkout-btn");

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function (e) {
      e.preventDefault();

      alert("🎉 Checkout Successful! Thank you for your purchase.");

      // clear cart
      localStorage.removeItem("skillspot_cart");

      // redirect to home
      window.location.href = "index.html";
    });
  }
});
