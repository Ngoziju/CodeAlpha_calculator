//calculator program

const display = document.getElementById("display")

 function append(input){
    display.value += input;
 }

 function cleardisplay(){
    display.value ="";
 }
 function deletelast(){
    display.value = display.value.slice(0,-1);
 }
 function calculate(){
    try{
    display.value = eval(display.value)
    }
    catch(error){
        display.value ="ERROR"
    }
 }
 // Custom cursor
  const cursor = document.getElementById('cursor');
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });
