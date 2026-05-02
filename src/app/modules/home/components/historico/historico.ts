import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historico',
  imports: [CommonModule],
  templateUrl: './historico.html',
  styleUrl: './historico.scss'
})
export class Historico {
  @Input() gastos: {descricao: string, valor: number}[] = [];
}