import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componente/login/login.component';
import { ProductoEditarComponent } from './componente/producto-editar/producto-editar.component';
import { ProductosBmComponent } from './componente/productos-bm/productos-bm.component';
import { ProductosComponent } from './componente/productos/productos.component';
import { RegistroComponent } from './componente/registro/registro.component';
 /*import { VerificadorGuard } from './helpers/verificador.guard';*/


const routes: Routes = [{path:'',component:LoginComponent},
{path:'login',component:LoginComponent},
{path:'lista-productos',component:ProductosComponent/*,canActivate:[VerificadorGuard]*/},
{path:'productos-bm',component:ProductosBmComponent},
{path:'producto-editar/:nombre/:mail/:id',component:ProductoEditarComponent},
{path:'registro',component:RegistroComponent},
]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
