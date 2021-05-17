import { PedidoModel } from "./pedido.model";
import { ProdutosPedidosModel } from "./produtosPedidos.model";

export class PedidoItemModel {
  pedido : PedidoModel
  itens: ProdutosPedidosModel
}
