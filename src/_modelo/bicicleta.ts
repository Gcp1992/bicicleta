export class Bicicleta {
  private _color: string;
  private _marca: string;
  private _velocidad: number;
  private _platos: number;
  private _electrica: boolean;

  //Constructor
  constructor(color: string, marca: string, velocidad: number, platos: number, electrica: boolean) {
    this._color = color;
    this._marca = marca;
    this._velocidad = velocidad;
    this._platos = platos;
    this._electrica = electrica;
  }

  //Métodos Getters y Setters
  public get color(): string {
    return this._color;
  }

  public set color(value: string) {
    this._color = value;
  }

  public get marca(): string {
    return this._marca;
  }

  public set marca(value: string) {
    this._marca = value;
  }

  public get velocidad(): number {
    return this._velocidad;
  }

  public set velocidad(value: number) {
    this._velocidad = value;
  }

  public get platos(): number {
    return this._platos;
  }

  public set platos(value: number) {
    this._platos = value;
  }

  public get electrica(): boolean {
    return this._electrica;
  }

  public set electrica(value: boolean) {
    this._electrica = value;
  }

  public acelerar(velocidad: number): void {
    this._velocidad += velocidad;
  }

  public frenar(velocidad: number): void {
    this._velocidad -= velocidad;
  }

  // Método toString para devolver todos los datos
  public toString(): string {
    return `Color: ${this._color}, Marca: ${this._marca}, Velocidad: ${this._velocidad}, Platos: ${this._platos}, Eléctrica: ${this._electrica}`;
  }
}



