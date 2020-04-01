// Variables (disponibles en todo el documento)
const presupuestoUsuario = prompt('Cual es tu presupuesto semanal?');
const formulario = document.getElementById('agregar-gasto');
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

// Maneja todo lo relacionado al HTML
class Interfaz{
    insertarPresupuesto(cantidad){
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        // inserta al html
        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }

    imprimirMensaje(mensaje, tipo){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        } else {
            ivMensaje.classList.add('alert-success');
        }
        divMensaje.appendChild(document.createTextNode(mensaje));

        // insertar en el DOM
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        // quitar alert despues de 3 sg
        setTimeout(function(){
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        }, 3000)
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
        
        // instanciar interfaz
        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
});

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    
    // leer del formulario de gastos
    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = document.querySelector('#cantidad').value;

    // instanciar interfaz
    const ui = new Interfaz();

    // comprobar que los campos no esten vacios
    if(nombreGasto === '' || cantidadGasto === ''){
        // console.log('hubo un error!');

        // 2 parametros: mensaje y tipo
        ui.imprimirMensaje('Hubo un error', 'error');
    }else{
        console.log('gasto se agrego');
    }

});