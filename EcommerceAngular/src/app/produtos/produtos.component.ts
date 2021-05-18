import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { ProdutosPedidosModel } from '../models/produtosPedidos.model'
import { Router, Data } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Array<ProdutosPedidosModel>;
  produtosCarrinho: Array<ProdutosPedidosModel>;

  constructor(private produtosService: ProdutosService, public router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.produtos = new Array<ProdutosPedidosModel>();
    this.produtosCarrinho = new Array<ProdutosPedidosModel>();
    this.listar();

    this.dataService.produtosCarrinho.subscribe((res: Array<ProdutosPedidosModel>) => {
      this.produtosCarrinho = res;
    });
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
    this.produtosCarrinho.push(produto);
    this.dataService.produtosCarrinho.next(this.produtosCarrinho);
    const navigationDetails: string[] = ['/carrinho']
    this.router.navigate(navigationDetails);
  }

}
