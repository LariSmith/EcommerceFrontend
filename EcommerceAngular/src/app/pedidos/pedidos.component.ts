import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteModel } from '../models/cliente.model';
import { PedidoModel } from '../models/pedido.model';
import { PedidoItemModel } from '../models/pedidoItem.model';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  cliente: ClienteModel = new ClienteModel();
  pedidoItem: PedidoItemModel = new PedidoItemModel();

  constructor(private route: ActivatedRoute, private clienteService : ClienteService) { }

  ngOnInit(): void {
    this.route.data.subscribe((res: ClienteModel) => {
      this.clienteService.listaCompraCliente(res.id).subscribe( result => {
        this.pedidoItem = result;
      });
    }),
    error => {
      console.log('ERROR', error);
    }
  }
}
