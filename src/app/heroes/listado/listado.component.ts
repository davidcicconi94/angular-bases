import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['../../app.component.css'],
})
export class ListadoComponent {
  heroes: Array<string> = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    const borrado = this.heroes.shift() || '';
    this.heroeBorrado = borrado;
  }
}
