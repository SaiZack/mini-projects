var circle = document.getElementById('circle')
var line = document.getElementById('line')
var front = document.getElementById('front')
var range = document.getElementById('range')
var output = document.getElementById('output')
var code = document.getElementById('code')
var unit_obj = document.getElementById('unit')
let filters = [['blur'],['brightness'],['contrast'],['grayscale'],['hue-rotate'],['invert','75'],['saturate'],['sepia']]


document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  circle.style.left = x + 'px'
  circle.style.top = y + 'px'
  line.style.left = x + 'px'
  front.style.left = x + 'px'
  front.style.width = 'calc(100vw - '+ x +'px)'
})
function rangeVal(val) {
  output.innerHTML = val; 
  render()
}
select.addEventListener('change', function(){
  unit_obj.innerHTML = units(select.value)
  if(select.value == 'hue-rotate'){
    range.max = 360
  }
  else{
    range.max = 100
  }
  render()
})

function render(){
  text = addFilter()
  front.style.setProperty('--filter', text);
  console.log(text)
}

function units(type){
if(type == 'hue-rotate'){
    return 'deg'
  }
  else if (type == 'blur'){
    return 'px'
  }
  else if (type == 'brightness'){
    return ''
  }
  else{
     return '%'
  }
}
function addFilter(){
  filter = select.value
  var row = 0;
  var text = ''
    
  for(i=0; i<filters.length; i++){
    if(filters[i].includes(filter)){
      filters[i][1] = range.value
    }
  }
  for(i=0; i<filters.length; i++){
    if(filters[i][1] != null){
      text += filters[i][0] + '('+ filters[i][1] + units(filters[i][0]) +') '
      row++
    }
  }
  rows(row)  
  code.innerHTML = 'filter: ' + text + ';'
  return text
}
function rows(row){
  switch(row){
    case 3: code.setAttribute('rows', '2'); break;
    case 5: code.setAttribute('rows', '3'); break;
    case 7: code.setAttribute('rows', '4'); break;
    default: code.setAttribute('row', '1');
  }
}

function removeFilter(){
  filter = select.value
  var row = 0
  var text = ''
  var count = 0
  
  for(i=0; i<filters.length; i++){
    if(filters[i][1] != null){
      count++
    }
  }
  if(count > 1){
    for(i=0; i<filters.length; i++){
      if(filters[i].includes(filter)){
        filters[i][1] = null
      }
      if(filters[i][1] != null){
        text += filters[i][0] + '('+ filters[i][1] + units(filters[i][0]) +') '
        row--
      }
    }
    rows(row)  
    code.innerHTML = 'filter: ' + text + ';'
    front.style.setProperty('--filter', text);
  }
  else {
    alert("Can't Remove Filter")
  }
}