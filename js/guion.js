/* function promediar(){
    var numero1=parseInt(document.getElementById("numero1").value);
    var numero2=parseInt(document.getElementById("numero2").value);
    var numero3=parseInt(document.getElementById("numero3").value);
    var promedio=(numero1+numero2+numero3)/3;
    document.getElementById("resultado").innerHTML="el promedio es:"+promedio;
    } */

const promediar = function () {
    const numero1 = parseInt(document.getElementById("numero1").value)
    const numero2 = parseInt(document.getElementById("numero2").value)
    const numero3 = parseInt(document.getElementById("numero3").value)
    return ((numero1 + numero2 + numero3)/3)
}


document.querySelector("#promediar").addEventListener("click", () => {
   document.getElementById("resultado").textContent = `El promedio es:` + promediar()
})



//const promediar2 = () => {}