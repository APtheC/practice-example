document.getElementById("promo").addEventListener("mouseover", function() {
    const promoMessages = document.querySelectorAll("#promo div[style='display:none;']");
    promoMessages.forEach(message => {
        message.style.display = "block";
    });
});
document.getElementById("promo").addEventListener("mouseout", function() {
    const promoMessages = document.querySelectorAll("#promo div[style='display:none;']");
    promoMessages.forEach(message => {
        message.style.display = "none";
    });
});
