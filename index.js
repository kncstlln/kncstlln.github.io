import { DotLottie } from "https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm";

new DotLottie({
    autoplay: true,
    loop: true,
    canvas: document.getElementById("canvas"),
    src: "https://lottie.host/0c759577-6f3e-453a-b95d-ba89ceefde2b/W2cjDRtEuh.json",
});

document.addEventListener('DOMContentLoaded', function() {
    const typewriterText = document.getElementById('typewriter-text');
    const texts = ['Be right back...', 'Updating...'];
    let index = 0;
    const animationDuration = 7000; 

    function swapText() {
        index = (index + 1) % texts.length;
        typewriterText.textContent = texts[index];
    }

    setInterval(swapText, animationDuration);
});
