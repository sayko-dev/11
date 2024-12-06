document.getElementById('search').addEventListener('input', function() {
    console.log("البحث: " + this.value);
});
// التنقل بين الصفحات (الانتقال بين الأقسام المختلفة)
document.addEventListener('DOMContentLoaded', function() {
    // تفعيل شريط التنقل لفتح الأقسام عند الضغط على الروابط
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // منع إعادة تحميل الصفحة
            const sectionId = this.getAttribute('href').substring(1); // الحصول على اسم القسم
            scrollToSection(sectionId);
        });
    });

    // دالة للتنقل إلى القسم المطلوب
    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // التعامل مع زر الحجز
    const bookingForm = document.querySelector('#booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const date = document.getElementById('date').value;
            const location = document.getElementById('location').value;
            const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

            // التأكد من صحة البيانات المدخلة
            if (!name || !date || !location) {
                alert('يرجى ملء جميع الحقول.');
                return;
            }

            // عملية تأكيد الحجز
            alert(`تم الحجز بنجاح!\nالاسم: ${name}\nالتاريخ: ${date}\nالمكان: ${location}\nطريقة الدفع: ${paymentMethod}`);
        });
    }

    // التعامل مع نموذج تسجيل الدخول
    const loginForm = document.querySelector('#login form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // التأكد من صحة البيانات المدخلة
            if (!email || !password) {
                alert('يرجى إدخال البريد الإلكتروني وكلمة المرور.');
                return;
            }

            // تسجيل الدخول بنجاح
            alert(`تم تسجيل الدخول بنجاح! مرحباً ${email}`);
        });
    }

    // التعامل مع زر "احجز الآن" على صفحة الخدمة
    const bookButtons = document.querySelectorAll('.service .btn, .provider .btn');
    bookButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert('تم إضافة الخدمة إلى سلة الحجز!');
        });
    });
});


/*----*/

document.getElementById('loadMore').addEventListener('click', function() {
    const hiddenItems = document.querySelectorAll('.gallery-item.hidden');
    hiddenItems.forEach(item => {
        item.classList.remove('hidden');
    });
    if (document.querySelectorAll('.gallery-item.hidden').length === 0) {
        this.style.display = 'none'; // إخفاء الزر إذا لم يتبقى عناصر مخفية
    }
});

var modal = document.getElementById("loginModal");
var btn = document.getElementById("loginBtn");
var span = document.getElementById("closeModal");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}