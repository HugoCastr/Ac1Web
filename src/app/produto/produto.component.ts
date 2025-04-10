import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produtos } from '../models/Produtos';
import { CommonModule, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-produto',
  imports: [NgStyle, FormsModule, CommonModule, RouterModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  
  produtos: Produtos[] = [
    { id: 1, nome: 'Mouse Sem Fio Logitech', descricao: 'O Mouse Sem Fio Logitech é o mais leve e rápido de todos os tempos.', preco: 100.0, estoque: 5 },
    { id: 2, nome: 'Teclado sem fio Logitech Pebble Keys 2 K380s', descricao: 'O teclado sem fio Logitech Pebble Keys 2 K380s é compacto, silencioso, conecta-se via Bluetooth a múltiplos dispositivos e possui design minimalista e bateria de longa duração.', preco: 150.0, estoque: 3 },
    { id: 3, nome: 'Fone Logitech H390 3', descricao: 'O fone Logitech H390 é um headset USB com microfone com cancelamento de ruído, proporcionando som claro e confortável para chamadas e videoconferências.', preco: 80.0, estoque: 0 },
    { id: 4, nome: 'Teclado Mecânico Gamer Logitech G PRO', descricao: 'O teclado mecânico gamer Logitech G PRO oferece switches Romer-G, design compacto e desempenho de alta precisão, ideal para jogadores profissionais e entusiastas.', preco: 3000.0, estoque: 2 },
    { id: 5, nome: 'Mouse Gamer Sem Fio Logitech G502 LIGHTSPEED', descricao: 'O mouse gamer sem fio Logitech G502 LIGHTSPEED oferece alta precisão, design ergonômico, 11 botões personalizáveis e tecnologia sem fio LIGHTSPEED para desempenho rápido e confiável.', preco: 250.0, estoque: 1 },
  ]
  
  constructor(private route: Router) {}

  comprar(id: Number) {
    this.route.navigate(['/detalhe', id]);
  }
}
