btn = document.querySelectorAll('.btn') 
room = document.getElementById('room')
btn.forEach(el => {
  el.addEventListener('click', function() {
    btn.forEach(e=>{e.classList.remove('active')})
    room.style.setProperty('--y-val', el.id)
    el.classList.add('active')
  });
});