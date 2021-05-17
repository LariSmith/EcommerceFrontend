import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { ProdutoModel } from '../models/produto.model';
import { ProdutosPedidosModel } from '../models/produtosPedidos.model'

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Array<ProdutosPedidosModel>;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.produtos = new Array<ProdutosPedidosModel>();
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
    console.log(produto);
  }

}
