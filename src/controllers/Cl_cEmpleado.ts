import { I_vEmpleado } from "../interfaces/I_vEmpleado.js";
import Cl_mEmpleado from "../models/Cl_mEmpleado.js";

export default class Cl_cEmpleado {
  private vista: I_vEmpleado;
  private callback!: (empleado: Cl_mEmpleado | null) => void;
  constructor(vista: I_vEmpleado) {
    this.vista = vista;
    // El controlador se suscribe a los eventos de la interfaz
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }
  // Método para que la Curso llame a este controlador
  solicitarEmpleado(callback: (empleado: Cl_mEmpleado | null) => void) {
    this.callback = callback;
    this.vista.mostrar();
  }
  private btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }
  private btAceptarOnClick() {
    this.callback(
      new Cl_mEmpleado({
        nombre: this.vista.nombre,
        cedula: this.vista.cedula,
        sueldoActual: this.vista.sueldoActual,
        aniosTrabajando: this.vista.aniosTrabajando,
      }),
    );
    this.vista.ocultar();
  }
}
