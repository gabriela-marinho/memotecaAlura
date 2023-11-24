import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PensamentoInterface} from "./pensamentoInterface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PensamentoServiceService {

  private readonly API = 'http://localhost:3000/pensamentos'
  constructor(private http: HttpClient) { }

  listar():Observable<PensamentoInterface[]> {
    return this.http.get<PensamentoInterface[]>(this.API)
  }

  criar(pensamento: PensamentoInterface): Observable<PensamentoInterface> {
    return this.http.post<PensamentoInterface>(this.API, pensamento)
  }

  excluir(id:number): Observable<PensamentoInterface>{
    const url = `${this.API}/${id}`
    return this.http.delete<PensamentoInterface>(url)
  }

  buscarPorId(id: number): Observable<PensamentoInterface> {
    const url = `${this.API}/${id}`
    return this.http.get<PensamentoInterface>(url)
  }

  editar(pensamento: PensamentoInterface): Observable<PensamentoInterface> {
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<PensamentoInterface>(url, pensamento )
  }
}
