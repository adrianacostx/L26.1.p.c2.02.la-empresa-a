export default class Cl_vEmpleadoBootstrap {
    inNombre;
    btCancelar;
    btAceptar;
    vista;
    inCedula;
    inSueldoActual;
    inAniosTrabajando;
    modal;
    constructor() {
        this.vista = document.getElementById("empleado");
        this.inNombre = document.getElementById("empleado_inNombre");
        this.inCedula = document.getElementById("empleado_inCedula");
        this.inSueldoActual = document.getElementById("empleado_inSueldoActual");
        this.inAniosTrabajando = document.getElementById("empleado_inAniosTrabajando");
        this.btCancelar = document.getElementById("empleado_btCancelar");
        this.btAceptar = document.getElementById("empleado_btAceptar");
        const elementoModal = document.getElementById("empleado");
        this.modal = new bootstrap.Modal(elementoModal);
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get cedula() {
        return this.inCedula ? +this.inCedula.value : 0;
    }
    get sueldoActual() {
        return this.inSueldoActual ? +this.inSueldoActual.value : 0;
    }
    get aniosTrabajando() {
        return this.inAniosTrabajando ? +this.inAniosTrabajando.value : 0;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        this.inNombre.value = "";
        this.inCedula.value = "";
        this.inSueldoActual.value = "";
        this.inAniosTrabajando.value = "";
        this.modal.show();
    }
    ocultar() {
        this.modal.hide();
    }
}
//# sourceMappingURL=Cl_vEmpleadoBootstrap.js.map