// جلب عنصر الزر "متابعة" من الصفحة
const submitButton = document.getElementById('submitButton');

// إضافة مستمع حدث النقر على الزر
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // منع السلوك الافتراضي للنقرة

  // جلب قيم الحقول من النموذج
  const fullName = document.getElementById('fullName').value;
  const nationalID = document.getElementById('nationalID').value;
  const dateOfBirth = document.getElementById('dateOfBirth').value;
  const phoneNumber = document.getElementById('phoneNumber').value;

  // التحقق من صحة البيانات
  if (fullName && nationalID && dateOfBirth && phoneNumber) {
    // إذا كانت جميع الحقول غير فارغة

    // قم بتنفيذ الإجراءات المطلوبة هنا (مثل إرسال البيانات أو إكمال عملية الشراء)

    console.log('تم تحقق البيانات بنجاح!');
  } else {
    // إذا كان أي من الحقول فارغة

    console.log('يرجى ملء جميع الحقول!');
  }
});