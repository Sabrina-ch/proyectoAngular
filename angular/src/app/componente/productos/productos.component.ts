
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Entidades/usuario';
import { ProductoServicioService } from 'src/app/helpers/producto-servicio.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  usuarios!:Array<Usuario>;
   dato!:string;
    usuario = new Usuario;
    buscar! :string;

  constructor(private router: Router,private servicio:ProductoServicioService) { 
    
   this.servicio.traerUsuarios().subscribe(resultado=> {this.usuarios =<Array<Usuario>> resultado });
    
  }

  ngOnInit(): void {
  }

         eliminar(value: any){
         this.dato = value;
          const id = {id: this.dato}
          console.log(id);
             this.servicio.eliminarUsuario(id).subscribe( data => {
             let datos = Object.values(data);
            if(datos[0] == true){
              window.location.reload();
            }else{
               console.log("false")
              }
             });
              }



              /* noModifica(){
    this.modificar =-1;
    
      }  

    modifica(idModificar:number){
    
      this.modificar = idModificar;
    }*/

  
  

  }
  

