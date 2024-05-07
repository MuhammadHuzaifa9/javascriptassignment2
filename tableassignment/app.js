function table(){
var tableRange=document.getElementById('range').value;
var tableNumber=document.getElementById('number').value;
var generator=document.getElementById('tableGenerator');

generator.innerHTML='';
tableContent='';
for(let i=0;i<=tableRange;i++){
    tableContent += `${i} x ${tableNumber} = ${i*tableNumber}<br>`;
}

generator.innerHTML=tableContent;
}