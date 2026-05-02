import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historico',
  imports: [CommonModule],
  templateUrl: './historico.html',
  styleUrl: './historico.scss'
})
export class Historico {
  @Input() gastos: {descricao: string, valor: number, categoria: string, data: string}[] = [];
  @Output() gastoRemovido = new EventEmitter<number>();

  get total() {
    return this.gastos.reduce((acc, gasto) => acc + gasto.valor, 0);
  }

  remover(index: number) {
    this.gastoRemovido.emit(index);
  }
}