import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gasto',
  imports: [FormsModule],
  templateUrl: './gasto.html',
  styleUrl: './gasto.scss'
})
export class Gasto {
  descricao: string = '';
  valor: number = 0;

  @Output() gastoAdicionado = new EventEmitter<{descricao: string, valor: number}>();

  adicionar() {
    if (this.descricao && this.valor > 0) {
      this.gastoAdicionado.emit({ descricao: this.descricao, valor: this.valor });
      this.descricao = '';
      this.valor = 0;
    }
  }
}