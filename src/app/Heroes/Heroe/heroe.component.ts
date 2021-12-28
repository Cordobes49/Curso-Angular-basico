import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html' 
})
export class HeroeComponent{
    Nombre: string = 'Ironman'; 
    Edad: Number = 30;

    get nombreCapitalizado(){
        return this.Nombre.toUpperCase();
    }

    obtenerNombre():string {
        return `${ this.Nombre } - ${ this.Edad }`;

    }

    CambiarNombre(): void{
        this.Nombre = 'Hulk';

    }

    CambiarEdad(): void{
        this.Edad = 25;

    }


}