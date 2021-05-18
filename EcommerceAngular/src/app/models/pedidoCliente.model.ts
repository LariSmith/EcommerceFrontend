import { ClienteModel } from '../models/cliente.model';
import { ProdutosPedidosModel } from '../models/produtosPedidos.model';

export class PedidoClienteModel {
  cliente: ClienteModel
  itens: ProdutosPedidosModel[]
}
