var global = {};


function events(){
    $('#unTexto').on('click', function(){
        global = '¿Bien o no?';
        alert(global);
    });
}


function init() {
	events();
} 


window.onload = init;