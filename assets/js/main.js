document.querySelector(".menu")
    .addEventListener("click", function(){
        document.querySelector(".menu-screen").classList.add("active")
    });

document.querySelector(".close")
    .addEventListener("click", function(){
        document.querySelector(".menu-screen").classList.remove("active")
    });


let links = document.querySelectorAll(".menu-screen a")

links.forEach(link => {
    link.addEventListener("click", function(ev){
        document.querySelector(".menu-screen").classList.remove("active")
    })
});

//Detectar navegador que el navegador es firefox y cambiar estilos al slider
var es_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var container_image = document.querySelector("#container_image")
if(es_firefox){
	container_image.style.width = 300+"%"
}

document.body.style.overflowX = "hidden"
