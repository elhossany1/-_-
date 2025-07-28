function navigateToStage(stage) {
    const studentName = document.getElementById('student-name').value.trim();
    
    if (!studentName) {
        alert('من فضلك أدخل اسمك أولاً');
        return;
    }
    
    // حفظ اسم الطالب
    localStorage.setItem('studentName', studentName);
    
    // توجيه حسب المرحلة
    if (stage === 'primary') {
        window.location.href = 'primary.html';
    }
    // يمكن إضافة مراحل أخرى لاحقاً
}