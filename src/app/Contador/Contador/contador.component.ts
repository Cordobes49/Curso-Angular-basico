import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `                 

<h1>{{title}}</h1>
<h3> {{base}} </h3> 

<button (click)="acumular(base)"> + 5 </button>


<span> {{numero}} </span>

<button (click)="acumular(-base)">-5</button>



` 
})

export class contadorComponent {
    title = 'Contador App';
  numero: number = 0
  base: number = 5


  acumular( valor: number ) {
    this.numero += valor;

}
}