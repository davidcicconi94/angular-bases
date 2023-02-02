import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent {
  public name: string = 'Ironman';
  age: number = 38;

  // Getter, sin el "get" se renderiza la funcion
  get nombreCapitalizado(): string {
    return this.name.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.name} - ${this.age}`;
  }

  cambiarNombre(): void {
    this.name = 'Spiderman';
  }

  cambiarEdad(): void {
    this.age = 22;
  }
}
