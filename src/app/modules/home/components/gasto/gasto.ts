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
  categoria: string = '';
  data: string = '';

  categorias = [
    'Alimentação',
    'Transporte',
    'Saúde',
    'Lazer',
    'Educação',
    'Outros'
  ];

  @Output() gastoAdicionado = new EventEmitter<{
    descricao: string,
    valor: number,
    categoria: string,
    data: string
  }>();

  adicionar() {
    if (this.valor > 0 && this.categoria) {
      this.gastoAdicionado.emit({
        descricao: this.descricao,
        valor: this.valor,
        categoria: this.categoria,
        data: this.data
      });
      this.descricao = '';
      this.valor = 0;
      this.categoria = '';
      this.data = '';
    }
  }
}