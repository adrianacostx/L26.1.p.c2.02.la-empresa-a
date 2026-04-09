// src/interfaces/I_vEmpresa.ts
export interface I_vEmpresa {
  // En lugar de exponer el botón HTML, exponemos una acción
  onNuevoEmpleado(callback: () => void): void;
  reportar({ nominaNueva, mayorAumento }: { nominaNueva: number; mayorAumento: string }): void;
}
