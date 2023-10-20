document.addEventListener("DOMContentLoaded", function() {
    // Get the current date
    var currentDate = new Date();

    // Get the current month (zero-based index)
    var currentMonth = currentDate.getMonth();

    // Check if it's October (index 9)
    if (currentMonth === 9) {
        document.documentElement.style.setProperty('--color-tint', '#FF7A22');
    }
});