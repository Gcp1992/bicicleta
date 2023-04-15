import { Component } from '@angular/core';
import { Bicicleta } from '../../_modelo/bicicleta';

@Component({
  selector: 'app-bicicleta',
  templateUrl: './bicicleta.component.html',
  styleUrls: ['./bicicleta.component.css']
})
export class BicicletaComponent {

  private _modificarVelocidad: number = 0;

  public get modificarVelocidad(): number {
    return this._modificarVelocidad;
  }
  public set modificarVelocidad(value: number) {
    this._modificarVelocidad = value;
  }

  bicicleta = new Bicicleta("", "", 0, 0, false);

}
