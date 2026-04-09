export default class Cl_mEmpresa {
    acNominaNueva = 0;
    mayAumento = 0;
    nombreMayAumento = "";
    procesarEmpleado(e) {
        this.acNominaNueva += e.nuevoSueldo;
        if (e.aumento > this.mayAumento) {
            this.mayAumento = e.aumento;
            this.nombreMayAumento = e.nombre;
        }
    }
    get nombreMayorAumento() {
        return this.nombreMayAumento;
    }
    get totalNominaNueva() {
        return this.acNominaNueva;
    }
}
//# sourceMappingURL=Cl_mEmpresa.js.map