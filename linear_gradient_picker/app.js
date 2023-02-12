color_1 = document.getElementById('color_1')
color_2 = document.getElementById('color_2')
right = document.getElementById('right')
bottom = document.getElementById('bottom')
code_1 = document.getElementById('code-1')
code_2 = document.getElementById('code-2')
direction = document.getElementById('direction')

function rootChange(name, value){
  document.querySelector(":root").style.setProperty(name, value);
  console.log(name, value)
}
color_1.addEventListener('change', function(){
  rootChange('--color-1', color_1.value)
  code_1.innerHTML = color_1.value
})
color_2.addEventListener('change', function(){
  rootChange('--color-2', color_2.value)
  code_2.innerHTML = color_2.value
})

bottom.addEventListener('click', function(){
  rootChange('--flex-direction', 'column')
  rootChange('--direction', 'to bottom')
  direction.innerText = 'to bottom'
  bottom.style.display = "none"
  right.style.display = "inline"
})

right.addEventListener('click', function(){
  rootChange('--flex-direction', 'row')
  rootChange('--direction', 'to right')
  direction.innerText = 'to right'
  right.style.display = "none"
  bottom.style.display = "inline"
})