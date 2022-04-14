import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/Entidades/usuario';
import { ProductoServicioService } from 'src/app/helpers/producto-servicio.service';

@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.css']
})
export class ProductoEditarComponent implements OnInit {

  sub: any | undefined;
  id: any | undefined;
  nombre: any | undefined;
  mail: any | undefined
 
  
  constructor(private ruteo:Router,private _Activatedroute:ActivatedRoute, private servicio:ProductoServicioService) {

     
   }
   
   ngOnInit(): void {
    this.sub = this._Activatedroute.paramMap.subscribe(params =>
       { (this.id= params.get('id')); 
        (this.nombre=params.get('nombre')); 
        (this.mail=params.get('mail'));
      });
  }

  editarUsuario(){
          
      const usu = {id:this.id,nombre:this.nombre, mail:this.mail}
      this.servicio.editarDatosUsuario(usu).subscribe( data => {
        let datos = Object.values(data);
        console.log(usu);
        if(datos[0] == true){

          this.ruteo.navigateByUrl("/lista-productos");
        
        }else{
          console.log("false")
        }
      });
        

    }
  }