var input= document.querySelector('#input')
        var btn= document.querySelectorAll('.btn')
        var toggleBtn= document.getElementById('toggleBtn')
for(item of btn){
    item.addEventListener("click", (e) =>{
        btntext= e.target.innerText
        if(btntext ==='x'){
            btntext = '*'
        }

        if(btntext === '÷'){
            btntext= '/'
        }
        input.value += btntext
    })
}
let trigMode = 'rad'; 
function sin() {

    let angle;
    if(trigMode === 'deg') {
      // convert to radians 
      angle = input.value * Math.PI / 180; 
    } else {
      angle = input.value;
    }
  
    input.value = Math.sin(angle);
  
  }
  
  function cos() {
    
    if(trigMode === 'deg') {
       angle = input.value * Math.PI / 180;  
    } else {
       angle = input.value;
    }
    
    input.value = Math.cos(angle);
  } 
  function tan() {
    
    if(trigMode === 'deg') {
       angle = input.value * Math.PI / 180;  
    } else {
       angle = input.value;
    }
    
    input.value = Math.tan(angle);
  } 
  
  toggleBtn.addEventListener('click', () => {
    if(trigMode === 'deg') {
      trigMode = 'rad';
    } else {
      trigMode = 'deg'; 
    } 
  });


function log(){
    input.value= Math.log(input.value)
}
function pow(){
    input.value= Math.pow(input.value, 2)
}
function sqrt(){
    input.value= Math.sqrt(input.value, 2)
}
function pi(){
    input.value= 3.14159265358979
}
function e(){
    input.value= 2.71828
}
function factorial(){
    var i, num, f;
    f= 1
    num= input.value

    for(i=1; i<=num; i++){
        f *= i
    }
    i=i-1
    input.value= f

}
function ce(){
    input.value= input.value.substr(0, input.value.length -1)
}