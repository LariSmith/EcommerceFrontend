import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteModel } from '../models/cliente.model';
import { PedidoService } from '../services/pedido.service';
import { PedidoClienteModel } from '../models/pedidoCliente.model';
import { ProdutosPedidosModel } from '../models/produtosPedidos.model'
import { ProdutoModel } from '../models/produto.model';
import { PedidoItemModel } from '../models/pedidoItem.model';
import { PedidoModel } from '../models/pedido.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  produtos: Array<ProdutosPedidosModel>;
  cliente: ClienteModel;
  pedidos: PedidoItemModel;
  valorTotalPedido: number = 0

  constructor(private route: ActivatedRoute, public router: Router, private pedidoService : PedidoService, private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.produtos);
    this.dataService.produtosCarrinho.subscribe((res: Array<ProdutosPedidosModel>) => {
      this.produtos = res;
      this.produtos.forEach(element => {
        this.valorTotalPedido += element.produto.preco*element.quantidade;
      });
    });
    this.cliente = new ClienteModel();
  }

  onSubmit(data: ClienteModel) {
    let pedidoCliente : PedidoClienteModel = new PedidoClienteModel();
    pedidoCliente.cliente = data;
    pedidoCliente.itens = this.produtos;
    this.pedidoService.cadastrarPedido(pedidoCliente).subscribe( (res: PedidoModel) => {
      this.dataService.pedidoCliente.next(res.id);
      const navigationDetails: string[] = ['/pedidos']
      this.router.navigate(navigationDetails);
    }),
    error => {
      console.log('ERROR', error);
    };
  }

  continuarComprando() {
    this.dataService.produtosCarrinho.next(this.produtos);
    const navigationDetails: string[] = ['/produtos']
    this.router.navigate(navigationDetails);
  }

  remover(item) {
    this.produtos.forEach((element, index) => {
      if(element.produto.id == item.produto.id) {
        this.produtos.splice(index, 1);
      }
    });
    this.dataService.produtosCarrinho.next(this.produtos);
  }

}
