import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mEmpleado extends Cl_mPersona {
    _sueldoActual = 0;
    _aniosTrabajando = 0;
    _numeroHijos = 0;
    constructor({ nombre, cedula, sueldoActual, aniosTrabajando, numeroHijos, }) {
        super({ nombre, cedula });
        this.sueldoActual = sueldoActual;
        this.aniosTrabajando = aniosTrabajando;
        this.numeroHijos = numeroHijos;
    }
    set sueldoActual(value) {
        this._sueldoActual = value;
    }
    get sueldoActual() {
        return this._sueldoActual;
    }
    set aniosTrabajando(value) {
        this._aniosTrabajando = value;
    }
    get aniosTrabajando() {
        return this._aniosTrabajando;
    }
    set numeroHijos(value) {
        this._numeroHijos = value; // Este setter es necesario para que el número de hijos se pueda establecer
    }
    get numeroHijos() {
        return this._numeroHijos;
    }
    get aumento() {
        if (this.aniosTrabajando < 5)
            return this.sueldoActual * 0.1;
        return this.sueldoActual * 0.2;
    }
    get aumentoPorHijos() {
        if (this.numeroHijos > 0) {
            return (this.sueldoActual + this.aumento) * 0.05;
        }
        return 0;
    }
    get nuevoSueldo() {
        return this.sueldoActual + this.aumento + this.aumentoPorHijos;
    }
}
//# sourceMappingURL=Cl_mEmpleado.js.map