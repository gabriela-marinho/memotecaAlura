import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'passo informaçoes para componet filho',
      autoria: 'component pai',
      modelo:'modelo3'
    },
    {
      conteudo: 'minha propriedade é decoprada com @ input',
      autoria: 'filho',
      modelo:'modelo3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
