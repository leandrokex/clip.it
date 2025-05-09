window.onload = function () {
    const cursor = document.getElementById('custom-cursor');
    const sections = document.querySelectorAll('section[data-cursor]');


    document.addEventListener('mousemove', e => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });

   
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            const c = section.getAttribute('data-cursor');
            cursor.style.color = c; 
        });
    });


    const produtoElement = document.getElementById('produto');
    if (produtoElement) {
        VANTA.TRUNK({
            el: "#produto", // Ensure this matches the id in your HTML
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xFFFFFF,
            backgroundColor: 0xD31027,
            spacing: 8.00,
            chaos: 5.00
        });
    } else {
        console.error("Element with id 'produto' not found.");
    }
};

new Vivus('clip-svg', {
    type: 'delayed',
    duration: 75,
    animTimingFunction: Vivus.EASE,
    start: 'autostart',
    dashGap: 20
});
