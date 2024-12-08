// دالة لإضافة التقييم
function submitReview() {
    const reviewText = document.getElementById('review-text').value;
    if (reviewText) {
        alert('تم إرسال التقييم بنجاح');
        //         // 
        document.getElementById('review-text').value = '';
    } else {
        alert('يرجى كتابة التقييم');
    }
}

// دالة للتواصل مع مقدم الخدمة
function contactService() {
    alert('تم إرسال طلب التواصل مع مقدم الخدمة');
     }