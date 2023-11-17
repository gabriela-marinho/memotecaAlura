import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  constructor() { }
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }
  ngOnInit(): void {
  }
  salvandoPensamento(){
    alert("aqui é um pensamento")
  }
  cancelandoPensamento(){
    alert("cancelado!")
  }
}
