import { I_vEmpresa } from "../interfaces/I_vEmpresa.js";

export default class Cl_vEmpresaBootstrap implements I_vEmpresa {
  private lblNominaNueva: HTMLElement;
  private btNuevoEmpleado: HTMLButtonElement;
  private vista: HTMLElement;

  constructor() {
    this.vista = document.getElementById("app-bootstrap") as HTMLElement;
    this.btNuevoEmpleado = document.getElementById(
      "body_btNuevoEmpleado",
    ) as HTMLButtonElement;
    this.lblNominaNueva = document.getElementById(
      "body_lblNominaNueva",
    ) as HTMLElement;
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
}
