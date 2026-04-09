import { I_vEmpleado } from "../interfaces/I_vEmpleado.js";
declare var bootstrap: any;

export default class Cl_vEmpleadoBootstrap implements I_vEmpleado {
  inNombre: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;
  inCedula: HTMLInputElement;
  inSueldoActual: HTMLInputElement;
  inAniosTrabajando: HTMLInputElement;
  inNumeroHijos: HTMLInputElement;
  private modal: any;

  constructor() {
    this.vista = document.getElementById("empleado") as HTMLElement;
    this.inNombre = document.getElementById(
      "empleado_inNombre",
    ) as HTMLInputElement;
    this.inCedula = document.getElementById(
      "empleado_inCedula",
    ) as HTMLInputElement;
    this.inSueldoActual = document.getElementById(
      "empleado_inSueldoActual",
    ) as HTMLInputElement;
    this.inAniosTrabajando = document.getElementById(
      "empleado_inAniosTrabajando",
    ) as HTMLInputElement;
    this.inNumeroHijos = document.getElementById(
      "empleado_inNumeroHijos",
    ) as HTMLInputElement;
    this.btCancelar = document.getElementById(
      "empleado_btCancelar",
    ) as HTMLButtonElement;
    this.btAceptar = document.getElementById(
      "empleado_btAceptar",
    ) as HTMLButtonElement;
    const elementoModal = document.getElementById("empleado");
    this.modal = new bootstrap.Modal(elementoModal);
  }
  get nombre(): string {
    return this.inNombre.value.trim();
  }
  get cedula(): number {
    return this.inCedula ? +this.inCedula.value : 0;
  }
  get sueldoActual(): number {
    return this.inSueldoActual ? +this.inSueldoActual.value : 0;
  }
  get aniosTrabajando(): number {
    return this.inAniosTrabajando ? +this.inAniosTrabajando.value : 0;
  }
  get numeroHijos(): number {
    return this.inNumeroHijos ? +this.inNumeroHijos.value : 0;
  }
  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }
  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }
  mostrar(): void {
    this.inNombre.value = ""; 
    this.inCedula.value = "";
    this.inSueldoActual.value = "";
    this.inAniosTrabajando.value = "";
    this.inNumeroHijos.value = "";
    this.modal.show();
  }
  ocultar(): void {
    this.modal.hide();
  }
}
