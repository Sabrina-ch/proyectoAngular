import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Entidades/usuario';
import { ApiService } from 'src/app/helpers/api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

   usuario = new Usuario;
   mensaje!:string;

  constructor(private ruta: Router,private servicioApi:ApiService) { }

  registro(){
      
    const usu={nombre:this.usuario.nombre,mail:this.usuario.mail,clave:this.usuario.clave};
   
    this.servicioApi.registrar(usu).subscribe( data => {
     if(data['success']==true){
       alert("usuario ingresado");
       this.ruta.navigateByUrl("/login");
    }
     else{
       data['message'];
     }
     
   }
   );

   }

  
  ngOnInit(): void {
  }

}
