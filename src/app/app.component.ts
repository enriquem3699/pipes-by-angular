import {registerLocaleData} from '@angular/common';
import localEs from '@angular/common/locales/es';

registerLocaleData(localEs);

import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre1:string='Capitan America';
  nombre:string='Enrique';
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  fecha:Date = new Date();

  valorPromesa= new Promise((resolve)=>{
    setTimeout(()=>{
      resolve('Llego la data')
    },4500);
  });

  
  personajes:string[] = ['Ironman','Spiderman','Thor','Loki','Groot'];

  PI:number=Math.PI;

  porcentaje : number = 0.234;
  salario:number=12345.5;

  heroe={
    nombre:'Logan',
    clave:'Wolverine',
    edad:500,
    direccion:{
      casa:'primera',
      casaa:20
    }
  }


}
