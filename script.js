let menuVisible = false;
//Función que oculta o muestra menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
} 

function seleccionar(){
    //oculto el menu una vez que selecciona una opcion
    document.getElementById("nav").classList ="";
    menuVisible = false;
}
//funcion que aplica animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[2].classList.add("htmlcss");
        habilidades[3].classList.add("photoshop");
        habilidades[4].classList.add("csharp");
        habilidades[5].classList.add("sqlserver");
        habilidades[6].classList.add("comunicación");
        habilidades[7].classList.add("trabajo");
        habilidades[8].classList.add("creatividad");
        habilidades[9].classList.add("dedicacion");
        habilidades[10].classList.add("proyect");
    }
}
//detecto el scrolling para aplicar la animacion de la barra de habilidaes
window.onscroll = function(){
    efectoHabilidades();
}