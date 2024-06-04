const amount=document.getElementById('amount');
const percentage=document.getElementById('percentage');
let result=document.getElementById('tipamount');
let total=document.getElementById('totalamount');


function calculatetip(){
    let tip=Math.ceil((amount.value*percentage.value)/100);
    let totalbill=parseInt(amount.value)+tip;

    result.innerHTML=tip;
    total.innerHTML=totalbill;




}