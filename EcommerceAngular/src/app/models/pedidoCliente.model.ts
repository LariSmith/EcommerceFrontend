import { ClienteModel } from '../models/cliente.model';
import { ProdutosPedidosModel } from '../models/produtosPedidos.model';

export class ClientePedidoModel {
  cliente: ClienteModel
  itens: ProdutosPedidosModel[]
}
