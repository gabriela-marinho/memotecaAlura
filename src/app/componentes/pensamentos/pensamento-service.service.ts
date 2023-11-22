import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {pensamentoInterface} from "./pensamentoInterface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PensamentoServiceService {

  private readonly API = 'http://localhost:3000/pensamentos'
  constructor(private http: HttpClient) { }

  listar():Observable<pensamentoInterface[]> {
    return this.http.get<pensamentoInterface[]>(this.API)
  }

  criar(pensamento: pensamentoInterface): Observable<pensamentoInterface> {
    return this.http.post<pensamentoInterface>(this.API, pensamento)
  }
}
