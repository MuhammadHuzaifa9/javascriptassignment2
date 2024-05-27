let colors=['#55efc4','#81ecec','#74b9ff','#a29bfe','#dfe6e9','#00b894','#00cec9','#0984e3','#6c5ce7','#b2bec3','#ffeaa7','#fab1a0','#ff7675','#fd79a8','#636e72','#fdcb6e','#e17055','#d63031','#e84393','#2d3436']
let colorName=['LIGHT GREENISH BLUE','FADED POSTER','GREEN DARNER TAIL','SHY MOMENT','CITY LIGHT','SMINT LEAF','ROBINS EGG BLUE','ELECTRON BLUE','EXODUS FRUIT','SOOTHING BREEZE','SOUR LEMON','FIRST DATE','PINK GLAMOUR','PICO-8 PINK','AMERICAN RIVER','BRIGHT YARROW','ORANGEVILLE','CHI-GONG','PRUNUS AVIUM','DRACULA ORCHID'];
var main=document.querySelector('.main');

for(let i=0;i<colors.length;i++){
    main.innerHTML+=`<div class="color" onclick="copyColor('${colors[i]}')" style="background-color:${colors[i]}"><div class="colorname">${colorName[i]}</div></div>`
    }
function copyColor(value){
    navigator.clipboard.writeText(value);
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Copied the color: ${value}`,
        showConfirmButton: false,
        timer: 1000
    });
}