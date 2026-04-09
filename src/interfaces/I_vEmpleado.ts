export interface I_vEmpleado {
  get nombre(): string;
  get cedula(): number;
  get sueldoActual(): number;
  get aniosTrabajando(): number;
  get numeroHijos(): number;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
