import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { ClienteModel } from '../models/cliente.model';
import { PedidoService } from '../services/pedido.service';
import { PedidoClienteModel } from '../models/pedidoCliente.model';
import { ProdutosPedidosModel } from '../models/produtosPedidos.model'
import { ProdutoModel } from '../models/produto.model';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produtos: ProdutosPedidosModel[];
  cliente: ClienteModel;

  constructor(private route: ActivatedRoute, private pedidoService : PedidoService) { }

  ngOnInit(): void {
    this.route.data.subscribe(res => {
      console.log(res);
      this.produtos = new Array<ProdutosPedidosModel>();
      let produto: ProdutoModel = res.produto;
      let quantidade : number = res.quantidade;
      this.produtos.push({produto,quantidade});
    }),
    error => {
      console.log('ERROR', error);
    }

    this.cliente = new ClienteModel();
  }

  onSubmit(data: ClienteModel) {
    let pedidoCliente : PedidoClienteModel = new PedidoClienteModel();
    pedidoCliente.cliente = data;
    pedidoCliente.itens = this.produtos;
    this.pedidoService.cadastrarPedido(pedidoCliente).subscribe( res => {
      console.log(res);
    });
  }

}
