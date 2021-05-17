import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProdutosService } from './services/produtos.service';
import { PedidoService } from './services/pedido.service';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    HeaderComponent,
    FooterComponent,
    CarrinhoComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProdutosService, PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
