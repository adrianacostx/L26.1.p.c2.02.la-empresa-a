import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mEmpleado extends Cl_mPersona {
    _sueldoActual = 0;
    _aniosTrabajando = 0;
    constructor({ nombre, cedula, sueldoActual, aniosTrabajando, }) {
        super({ nombre, cedula });
        this.sueldoActual = sueldoActual;
        this.aniosTrabajando = aniosTrabajando;
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
    get aumento() {
        if (this.aniosTrabajando < 5)
            return this.sueldoActual * 0.1;
        return this.sueldoActual * 0.2;
    }
    get nuevoSueldo() {
        return this.sueldoActual + this.aumento;
    }
}
//# sourceMappingURL=Cl_mEmpleado.js.map