import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProdutosService {

  produtosApi : string = environment.webApiBaseUrl + 'Produtos'

  constructor(private http: HttpClient) { }

  listar () {
    return this.http.get<any[]>(`${this.produtosApi}`+ '/listar-produtos')
  }

}
