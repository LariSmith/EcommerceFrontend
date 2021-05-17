import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class PedidoService {

  produtosApi : string = environment.webApiBaseUrl + 'Pedidos'

  constructor(private http: HttpClient) { }

  cadastrarPedido (data: any) {
    return this.http.post(`${this.produtosApi}`+ '/cadastrar-pedido', data);
  }

}
