//let elemento = document.querySelector(".gb-container-ab93f50e")
function Rname(elementoPadre, claseDelElemento) {
    console.log(elementoPadre.children)
    const hijo = elementoPadre.children

    if(hijo.length === 0 && 
        !([...elementoPadre.classList].includes(claseDelElemento))
    ){
        return false
    }


    if (hijo.length 
        && 
        !([...elementoPadre.classList].includes(claseDelElemento))
    ) {
        return Rname(hijo[0], claseDelElemento)
    }
    else if([...elementoPadre.classList].includes(claseDelElemento))
    {
	 	console.log("Encontrado!")
		return true
	}
}

var valor =Rname(document.querySelector(".gb-container-ab93f50e"),"term-finanzas")

console.log("veamos el valor", valor)

if(valor){
	document.querySelector(".gb-container-ab93f50e").style.backgroundImage ="url('https://empresasfamiliares.com/wp-content/uploads/2023/04/Finanzas-portada-web-Empresas-Familiares-min.png')"
}