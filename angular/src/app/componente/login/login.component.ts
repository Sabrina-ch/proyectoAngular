import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Entidades/usuario';
import { ApiService } from 'src/app/helpers/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
   
  usuario= new Usuario;

 /* usuario!:string;*/
 
  
  constructor(private ruteo:Router,private servicio:ApiService) {
    
     
   /*this.usuario="";*/

   }
 
   login(){
     const usu={nombre:this.usuario.nombre,clave:this.usuario.clave};
     
     this.servicio.loguear(usu).subscribe( data => {
        console.log(data); 
      sessionStorage.setItem("usuario",data)!= null
        this.ruteo.navigate(["/lista-productos"]);
     
      }


     

   );
  }

   /*localStorage.setItem("usuario", this.usuario)
     this.ruteo.navigate(["/lista-productos"]);*/
     
   
  ngOnInit(): void {
  }

}

