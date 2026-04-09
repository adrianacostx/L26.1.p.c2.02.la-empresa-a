export default class Cl_vEmpresaPlain {
    lblNominaNueva;
    btNuevoEmpleado;
    vista;
    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevoEmpleado = document.getElementById("body_btNuevoEmpleado");
        this.lblNominaNueva = document.getElementById("body_lblNominaNueva");
    }
    onNuevoEmpleado(callback) {
        this.btNuevoEmpleado.onclick = callback;
    }
    reportar({ nominaNueva, mayorAumento }) {
        this.lblNominaNueva.innerHTML = `${nominaNueva}`;
        const lblMayorAumento = document.getElementById("body_lblMayorAumento");
        if (lblMayorAumento) {
            lblMayorAumento.innerHTML = mayorAumento;
        }
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vEmpresaPlain.js.map