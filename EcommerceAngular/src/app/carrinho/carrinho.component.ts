import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { ClienteModel } from '../models/cliente.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produtos: Array<Data>;
  cliente: ClienteModel;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      console.log(res);
      this.produtos = new Array<Data>();
      this.produtos.push(res);
    }),
    error => {
      console.log('ERROR', error);
    }

    this.cliente = new ClienteModel();
  }

}
