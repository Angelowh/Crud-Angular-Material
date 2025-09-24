import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estado } from './brasilapi.model';

@Injectable({
  providedIn: 'root'
})
export class BrasilApiService {
  baseUrl = 'https://brasilapi.com.br/api'

  constructor(private http: HttpClient) { }

  carregarUfs() : Observable<Estado[]> {
    const path = '/ibge/uf/v1'
    return this.http.get<Estado[]>(this.baseUrl + path)
  }
}
