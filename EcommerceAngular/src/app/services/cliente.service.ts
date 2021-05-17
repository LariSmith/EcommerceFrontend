import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PedidoItemModel } from '../models/pedidoItem.model';

@Injectable()
export class ClienteService {

  produtosApi : string = environment.webApiBaseUrl + 'Clientes'

  constructor(private http: HttpClient) { }

  listaCompraCliente (id: any) {
    return this.http.get<PedidoItemModel>(`${this.produtosApi}`+ '/lista-compras-cliente', { params : {idCliente: id}});
  }

}
