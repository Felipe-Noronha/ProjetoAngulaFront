import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Product {
  id: number;
  nome: string;
  preco: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/produtos/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response: any) => {
        if (Array.isArray(response.content)) {
          return response.content.map((item: any) => ({
            id: item.id,
            nome: item.nome,
            preco: item.preco
          }));
        }
        return [];
      })
    );
  }
}
