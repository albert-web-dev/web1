//menu responsive


//load de la página
window.addEventListener('load', ()=>{
    //animation menu
    window.addEventListener('scroll', ()=>{
        let header = document.querySelector("header");
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    //menu responsive
    var aux = 0;
    var nav = document.querySelector("nav");
    console.log(nav);
    var menu = document.querySelector("#burger");
    menu.addEventListener('click', ()=>{
        
        if(aux == 0){
            Mostrar();
            aux = 1;
            console.log("mostrar");
        }else{
            Ocultar();
            aux = 0;
            console.log("ocultar");
        }
    });
    function Mostrar(){
        nav.className = 'active';
        console.log(nav);
    }
    function Ocultar(){
        nav.className = 'menu';
        console.log(nav);
    }
});//end load