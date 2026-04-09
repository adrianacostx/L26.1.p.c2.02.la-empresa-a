import { I_vEmpresa } from "../interfaces/I_vEmpresa";

export default class Cl_vEmpresaPlain implements I_vEmpresa {
  lblNominaNueva: HTMLInputElement;
  btNuevoEmpleado: HTMLButtonElement;
  vista: HTMLElement | null;
  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevoEmpleado = document.getElementById(
      "body_btNuevoEmpleado",
    ) as HTMLButtonElement;
    this.lblNominaNueva = document.getElementById(
      "body_lblNominaNueva",
    ) as HTMLInputElement;
  }
  onNuevoEmpleado(callback: () => void): void {
    this.btNuevoEmpleado.onclick = callback;
  }
  reportar({ nominaNueva, mayorAumento }: { nominaNueva: number; mayorAumento: string }): void {
    this.lblNominaNueva.innerHTML = `${nominaNueva}`;
    const lblMayorAumento = document.getElementById("body_lblMayorAumento");
    if (lblMayorAumento) {
      lblMayorAumento.innerHTML = mayorAumento;
    }
  }
  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}
