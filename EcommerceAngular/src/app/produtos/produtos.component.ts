import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Array<any>;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.listar();
    console.log(this.produtos);
  }

  listar() {
    this.produtosService.listar().subscribe(res => this.produtos = res);
  }

}
