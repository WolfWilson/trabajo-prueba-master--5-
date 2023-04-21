
var imagenes = [
    "img/encabezado.jpeg",
    "img/cumple.jpg",
    "img/golosinas.jpg",
    "img/reposteria.jpg",
    "img/descartables.jpg"
    ];
    
    
    document.Imagen.src = imagenes[0];
    
    var SliderDerecha = document.querySelector(".slider-derecho");
    var SliderIzquierda = document.querySelector(".slider-izquierdo");
    
    var Contador = 0;
    
    function MoverDerecha()
        {
            Contador++;
            if (Contador > imagenes.length - 1)
            {
                Contador = 0;
            }
            document.Imagen.src = imagenes[Contador];
    
        }
    
    var Intervalo = setInterval(MoverDerecha, 3000);
    
    SliderDerecha.addEventListener("click" ,  function()
    {
        clearInterval(Intervalo);
        MoverDerecha();
        Intervalo = setInterval(MoverDerecha, 3000);
    })
    
    function MoverIzquierda()
    {
           Contador--;
           if(Contador < 0){
            Contador = imagenes.length - 1;
           }
    
           document.Imagen.src = imagenes[Contador];
    
    }
    
    SliderIzquierda.addEventListener("click", function()
    {
        clearInterval(Intervalo);
        MoverIzquierda();
        Intervalo = setInterval(MoverDerecha, 3000);
    });
    