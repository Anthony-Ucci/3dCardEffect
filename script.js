const cardSvg = document.querySelector('.card-svg');

cardSvg.addEventListener('mousemove', function(e) {

    // Get the dimensions and the position of the SVG element
    const rect = cardSvg.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;


    // Calculate the x-axis rotation based on the vertical position of the mouse cursor
    const rotateX = (centerY - y) / 20;
    // Calculate the y-axis rotation based on the vertical position of the mouse cursor
    const rotateY = (x - centerX) / 20;


    // Calculate the horizontal deplacement of the shadow based on the y rotation (adjust the number to change the shadow movement)
    const shadowX = rotateY * 2; 
    // Calculate the horizontal deplacement of the shadow based on the x rotation 
    const shadowY = -rotateX * 2; 

    
    const shadowBlur = 5;

    // Apply the calculated rotation transformations on the SVG
    cardSvg.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    // Apply shadow filter
    cardSvg.style.filter = `drop-shadow(${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, 0.7))`;
});


cardSvg.addEventListener('mouseleave', function() {

    cardSvg.style.transform = 'none';
    cardSvg.style.filter = 'drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7))';
});

