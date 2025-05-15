document.body.addEventListener('click', function (e) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    
    const x = e.clientX;
    const y = e.clientY;
    circle.style.left = `${x - 25}px`;  
    circle.style.top = `${y - 25}px`;   
  
   
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3F033', '#8E44AD'];
    circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  

    const messages = ['Hi', 'Hello', 'Welcome', 'Hey there', 'Hola'];
    circle.textContent = messages[Math.floor(Math.random() * messages.length)];
  
    document.body.appendChild(circle);
  

    setTimeout(() => {
      circle.remove();
    }, 5000);
  });


