var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'Uit';
document.body.appendChild(btn);

// schijf hier tussen je code
function Switch(event){
    if (btn.innerHTML == 'Uit') {
        console.log('Licht Aan');
        btn.innerHTML = 'Aan';
        document.body.style.backgroundColor = "yellow";
  }  else {
        console.log('Licht Uit');
        btn.innerHTML = 'Uit';
        document.body.style.backgroundColor = "black"; 
    }
}

btn.onclick = Switch;


// schijf hier tussen je code