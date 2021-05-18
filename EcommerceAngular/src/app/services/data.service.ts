import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {

  produtosCarrinho: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  pedidoCliente: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor() {}

  storePassedCarrinho(passedData) {
      this.produtosCarrinho.next(passedData);
  }

  retrievePassedCarrinho() {
      return this.produtosCarrinho;
  }

  storePassedPedido(passedData) {
    this.pedidoCliente.next(passedData);
  }

  retrievePassedPedido() {
      return this.pedidoCliente;
  }


}
