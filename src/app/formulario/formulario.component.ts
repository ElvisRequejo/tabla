import { Component, OnInit } from '@angular/core';
import { libro } from '../models/libro';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
libro: libro[] = [];
titulo: string ="";
descripcion: string ="";


  constructor() {
    this.libro=[{titulo: "Angular", descripcion: "Angular es un framework para aplicaciones web"}]
  }

  ngOnInit(): void {
  }

  agregar(){
    const l = new libro(this.titulo, this.descripcion)
    this.libro.push(l);
    this.limpiar();
  }
  limpiar(){
    this.titulo="";
    this.descripcion="";
  }

}
