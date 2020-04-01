// Variables (disponibles en todo el documento)
const presupuestoUsuario = prompt('Cual es tu presupuesto semanal?');
let cantidadPresupuesto;




// Clases

class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }

    // metodo para ir restando al presupuesto
    presupuestoRestante(cantidad = 0){
        return this.restante -= Number(cantidad);
    }
}


// Event Listeners

document.addEventListener('DOMContentLoaded', function(){
    if(presupuestoUsuario === null || presupuestoUsuario === ''){
        // recargamos la ventana
        window.location.reload()
    } else {

        // instanciar un presupuesto
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
        console.log(cantidadPresupuesto);
    }
})