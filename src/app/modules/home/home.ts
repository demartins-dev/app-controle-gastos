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
  gastos: {descricao: string, valor: number}[] = [];

  adicionarGasto(gasto: {descricao: string, valor: number}) {
    this.gastos.push(gasto);
  }
}