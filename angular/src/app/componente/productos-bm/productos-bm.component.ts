import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Entidades/usuario';
import { ProductoServicioService } from 'src/app/helpers/producto-servicio.service';

@Component({
  selector: 'app-productos-bm',
  templateUrl: './productos-bm.component.html',
  styleUrls: ['./productos-bm.component.css']
})
export class ProductosBmComponent implements OnInit {

  
  usuario= new Usuario;

  constructor(private ruteo: Router, private servicio:ProductoServicioService) { 
    

  }

   agregarUsuario(){
    const usu={nombre:this.usuario.nombre,mail:this.usuario.mail,clave:this.usuario.clave};
     
     this.servicio.enviarDatosNuevos(usu).subscribe( data => {
      if (sessionStorage.getItem("usuario") != null) {
        this.ruteo.navigate(["/lista-productos"]);
     }data

      
    });
    }
    
  

  ngOnInit(): void {
  }

}
