import { Component } from '@angular/core';
import { Gasto } from './components/gasto/gasto';
import { Historico } from './components/historico/historico';

@Component({
  selector: 'app-home',
  imports: [Gasto, Historico],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  gastos: {descricao: string, valor: number, categoria: string, data: string}[] = [];

  adicionarGasto(gasto: {descricao: string, valor: number, categoria: string, data: string}) {
    this.gastos.push(gasto);
  }

  removerGasto(index: number) {
    this.gastos.splice(index, 1);
  }
}