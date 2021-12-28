import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { contadorComponent } from "./Contador/contador.component";

@NgModule ({
    declarations: [
        contadorComponent
    ],
    exports: [
        contadorComponent
    ],

    imports: [
        CommonModule
    ]


})

export class ContadorModule {

}