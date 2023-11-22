import { Component, OnInit } from '@angular/core';
import {pensamentoInterface} from "../pensamentoInterface";
import { PensamentoServiceService } from './../pensamento-service.service';
@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: pensamentoInterface[] = [];

  constructor(private service: PensamentoServiceService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    });
  }

}
