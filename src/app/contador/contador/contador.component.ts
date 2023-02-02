import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h2>{{ title }}</h2>

    <button (click)="sumar()">+1</button>

    <span> {{ number }} </span>

    <button (click)="restar()">-1</button>
  `,
  styleUrls: ['../../app.component.css'],
})
export class ContadorComponent {
  title: string = 'Contador App';
  number: number = 0;

  // Métodos
  sumar() {
    this.number += 1;
  }

  restar() {
    this.number -= 1;
  }

  acumular(value: number) {
    this.number += value;
  }
}
