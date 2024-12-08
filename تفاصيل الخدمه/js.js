let cart = JSON.parse(localStorage.getItem('cart')) || [];

// لا تقم باستدعاء addToCart هنا
// فقط قم بتعريف الدالة
function addToCart(id, name, price) {
    let existingProduct = cart.find(item => item.id === id);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    // تحديث localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

const bookButtons = document.querySelectorAll('.btnn .btn');
bookButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        alert('تم إضافة الخدمة إلى سلة الحجز!');
    });
});