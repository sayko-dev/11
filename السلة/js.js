let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', function() {
    updateCart();
});

// تحديث عرض السلة
function updateCart() {
    let cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // تفريغ المحتوى القديم

    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;

        let cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name} - ${item.price} ريال سعودي</p>
            <p>الكمية: <span>${item.quantity}</span></p>
            <button onclick="removeFromCart(${item.id})">إزالة</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // تحديث الإجمالي
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// إزالة منتج من السلة
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart)); // تحديث localStorage
    updateCart();
}

    // فتح نافذة الدفع
    function openPaymentPopup() {
        document.getElementById("payment-popup").style.display = "block";
    }

    // إغلاق نافذة الدفع
    function closePaymentPopup() {
        document.getElementById("payment-popup").style.display = "none";
    }