import Cl_mEmpleado from "../models/Cl_mEmpleado.js";
export default class Cl_cEmpleado {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        // El controlador se suscribe a los eventos de la interfaz
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    // Método para que la Curso llame a este controlador
    solicitarEmpleado(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new Cl_mEmpleado({
            nombre: this.vista.nombre,
            cedula: this.vista.cedula,
            sueldoActual: this.vista.sueldoActual,
            aniosTrabajando: this.vista.aniosTrabajando,
            numeroHijos: this.vista.numeroHijos,
        }));
        this.vista.ocultar();
    }
}
//# sourceMappingURL=Cl_cEmpleado.js.map