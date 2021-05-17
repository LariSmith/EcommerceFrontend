import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { ProdutosPedidosModel } from '../models/produtosPedidos.model'
import { Router, Data } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Array<ProdutosPedidosModel>;
  produtosCarrinho: Array<Data>;

  constructor(private produtosService: ProdutosService, public router: Router) { }

  ngOnInit(): void {
    this.produtos = new Array<ProdutosPedidosModel>();
    this.produtosCarrinho = new Array<Data>();
    ;
    this.listar();
  }

  listar() {
    this.produtosService.listar().subscribe(res => {
      res.forEach((element, index) => {
        this.produtos[index] = new ProdutosPedidosModel();
        this.produtos[index].produto = element;
        this.produtos[index].quantidade = 0;
      });
    });
  }

  comprar(produto: ProdutosPedidosModel) {
    let route = this.router.config.find(r => r.path ===
      'carrinho/:produtos');
    route.data = produto;

    this.router.navigateByUrl(`${'carrinho'}/${produto}`);
  }

}
