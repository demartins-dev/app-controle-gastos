import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IGasto } from '../../../../services/gasto';

@Component({
  selector: 'app-historico',
  imports: [CommonModule],
  templateUrl: './historico.html',
  styleUrl: './historico.scss'
})
export class Historico {
  @Input() gastos: IGasto[] = [];
  @Output() gastoRemovido = new EventEmitter<number>();

  get total() {
    return this.gastos.reduce((acc, gasto) => acc + gasto.valor, 0);
  }

  remover(index: number) {
    this.gastoRemovido.emit(index);
  }
}