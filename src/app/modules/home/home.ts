import { Component, inject } from '@angular/core';
import { Gasto } from './components/gasto/gasto';
import { Historico } from './components/historico/historico';
import { GastoService, IGasto } from '../../services/gasto';

@Component({
  selector: 'app-home',
  imports: [Gasto, Historico],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  private gastoService = inject(GastoService);

  get gastos() {
    return this.gastoService.obterGastos();
  }

  adicionarGasto(gasto: IGasto) {
    this.gastoService.adicionarGasto(gasto);
  }

  removerGasto(index: number) {
    this.gastoService.removerGasto(index);
  }
}