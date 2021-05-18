import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteModel } from '../models/cliente.model';
import { PedidoModel } from '../models/pedido.model';
import { PedidoItemModel } from '../models/pedidoItem.model';
import { ClienteService } from '../services/cliente.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  cliente: ClienteModel = new ClienteModel();
  pedidoItem: PedidoItemModel = new PedidoItemModel();

  constructor(private route: ActivatedRoute, private clienteService : ClienteService, private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.pedidoCliente.subscribe((res) => {
      console.log(res)
      this.clienteService.listaCompraCliente(res).subscribe( result => {
        this.pedidoItem = result;
      });
    });
  }
}
