import { ClienteModel } from '../models/cliente.model';

export class PedidoModel {
  id: number
  cliente: ClienteModel
  dataPedido: string
}
