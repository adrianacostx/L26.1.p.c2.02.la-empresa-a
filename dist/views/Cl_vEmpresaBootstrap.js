export default class Cl_vEmpresaBootstrap {
    lblNominaNueva;
    btNuevoEmpleado;
    vista;
    constructor() {
        this.vista = document.getElementById("app-bootstrap");
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
}
//# sourceMappingURL=Cl_vEmpresaBootstrap.js.map