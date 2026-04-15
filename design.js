const bg = document.getElementById('bg-container');
window.addEventListener('mousemove', (e) => {
  // Calculate movement (scaled down for subtle effect)
  let x = (e.clientX / window.innerWidth) * 20; 
  let y = (e.clientY / window.innerHeight) * 20;
  
  bg.style.setProperty('--x', `${-x}px`);
  bg.style.setProperty('--y', `${-y}px`);
});