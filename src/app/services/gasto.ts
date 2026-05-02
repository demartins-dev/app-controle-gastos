import { Injectable } from '@angular/core';

export interface IGasto {
  descricao: string;
  valor: number;
  categoria: string;
  data: string;
}

@Injectable({
  providedIn: 'root'
})
export class GastoService {
  private gastos: IGasto[] = [];

  obterGastos(): IGasto[] {
    return this.gastos;
  }

  adicionarGasto(gasto: IGasto): void {
    this.gastos.push(gasto);
  }

  removerGasto(index: number): void {
    this.gastos.splice(index, 1);
  }

  calcularTotal(): number {
    return this.gastos.reduce((acc, gasto) => acc + gasto.valor, 0);
  }
}