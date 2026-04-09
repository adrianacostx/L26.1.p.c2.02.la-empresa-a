import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mEmpleado extends Cl_mPersona {
  private _sueldoActual: number = 0;
  private _aniosTrabajando: number = 0;
  private _numeroHijos: number = 0;

  constructor({
    nombre,
    cedula,
    sueldoActual,
    aniosTrabajando,
    numeroHijos,
  }: {
    nombre: string;
    cedula: number;
    sueldoActual: number;
    aniosTrabajando: number;
    numeroHijos: number;
  }) {
    super({ nombre, cedula });
    this.sueldoActual = sueldoActual;
    this.aniosTrabajando = aniosTrabajando;  
    this.numeroHijos = numeroHijos; 
  }
  set sueldoActual(value: number) {
    this._sueldoActual = value;
  }
  get sueldoActual(): number {
    return this._sueldoActual;
  }
  set aniosTrabajando(value: number) {
    this._aniosTrabajando = value;
  }
  get aniosTrabajando(): number {
    return this._aniosTrabajando;
  }
  set numeroHijos(value: number) {
      this._numeroHijos = value; // Este setter es necesario para que el número de hijos se pueda establecer
  }
  get numeroHijos(): number {
    return this._numeroHijos;
  }

  get aumento(): number {
    if (this.aniosTrabajando < 5) return this.sueldoActual * 0.1;
    return this.sueldoActual * 0.2;
  }
  get aumentoPorHijos(): number {
    if (this.numeroHijos > 0) {
      return (this.sueldoActual + this.aumento) * 0.05;
    }
    return 0;
  }
  get nuevoSueldo(): number {
    return this.sueldoActual + this.aumento + this.aumentoPorHijos;
  }
}
