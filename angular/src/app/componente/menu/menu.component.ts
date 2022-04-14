import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
filter!:string;
  constructor(private ruteo:Router) { }

  ngOnInit(): void {
  }

  salir(){
    localStorage.removeItem("usuario");
    this.ruteo.navigate(["/login"]);
 

  }

}
