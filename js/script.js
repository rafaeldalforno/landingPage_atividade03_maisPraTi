let count = 1;

document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 5000);

function nextImage(){
    count++;
    if(count > 4){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}


function fazerPedido(){
    let modal = document.querySelector('.modal');
    let formulario = document.querySelector('.formulario');

    modal.style.display = 'block';
    formulario.style.display = 'none';
}

function outroPedido(){
    let modal = document.querySelector('.modal');
    let formulario = document.querySelector('.formulario');

    modal.style.display = 'none';
    formulario.style.display = 'block';
}