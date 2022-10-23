import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private api_url: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Pais[]> {
    const url = `${this.api_url}/name/${termino}`;
    return this.http.get<Pais[]>(url);
  }

  buscarCapital(termino: string): Observable<Pais[]> {
    const url = `${this.api_url}/capital/${termino}`;
    return this.http.get<Pais[]>(url);
  }

  
}
