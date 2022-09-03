var guardar=function(){
    var libros=parseInt(document.getElementById("libros").value);
    var cuadernos=parseInt(document.getElementById("cuadernos").value)
    var plumas=parseInt(document.getElementById("plumas").value)

    var lib,cua,plu,res;

    lib =libros*100;
    cua =cuadernos*15.50;
    plu =plumas*2.35;
    res=lib+cua+plu;
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `Luego de hacer calculos, el total es de: $ ${res}`

}
function reiniciar(){
   (document.getElementById("libros").value = "");
   (document.getElementById("cuadernos").value = "");
   (document.getElementById("plumas").value = "");
   respuesta.textContent = "";
}