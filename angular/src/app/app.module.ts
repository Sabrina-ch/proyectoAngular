import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componente/login/login.component';
import { ProductosComponent } from './componente/productos/productos.component';
import { ProductosBmComponent } from './componente/productos-bm/productos-bm.component';
import { MenuComponent } from './componente/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { ProductoEditarComponent } from './componente/producto-editar/producto-editar.component';
import { HttpClient,  HttpClientModule } from '@angular/common/http';
import { RegistroComponent } from './componente/registro/registro.component';
import { HighlightDirective } from './directivas/highlight.directive';
import { TransformacionPipe } from './pipe/transformacion.pipe';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductosComponent,
    ProductosBmComponent,
    MenuComponent,
    ProductoEditarComponent,
    RegistroComponent,
    HighlightDirective,
    TransformacionPipe,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
