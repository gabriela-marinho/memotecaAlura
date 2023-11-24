import { Component, OnInit } from '@angular/core';
import {PensamentoInterface} from "../pensamentoInterface";
import {PensamentoServiceService} from "../pensamento-service.service";

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: PensamentoInterface = {

    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }
  constructor(private service: PensamentoServiceService) { }

  ngOnInit(): void {
  }
  salvandoPensamento(){
    alert("aqui é um pensamento")
  }
  cancelandoPensamento(){
    alert("cancelado!")
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe();
  }
}
