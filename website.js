document.getElementById("promo").addEventListener("mouseover", function() {
    const promoMessages = document.querySelectorAll("#promo div[style='display:none;']");
    promoMessages.forEach(message => {
        message.style.display = "block";
        message.style.opacity = 0;
        setTimeout(() => {
            message.style.transition = "opacity 0.5s";
            message.style.opacity = 1;
        }, 0);
    });
});

document.getElementById("promo").addEventListener("mouseout", function() {
    const promoMessages = document.querySelectorAll("#promo div[style='display:none;']");
    promoMessages.forEach(message => {
        message.style.transition = "opacity 0.5s";
        message.style.opacity = 0;
        setTimeout(() => {
            message.style.display = "none";
        }, 500); // Wait for the transition to complete
    });
});

document.addEventListener("click", function(event) {
    const target = event.target;
    target.style.transition = "transform 0.3s";
    target.style.transform = "scale(1.1)";
    setTimeout(() => {
        target.style.transform = "scale(1)";
    }, 300); // Reset the scale after the animation
});
