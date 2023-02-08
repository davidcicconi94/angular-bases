import { Component } from '@angular/core';

import { Character } from '../interfaces/mk.interfaces';
import { MkService } from '../services/mk.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  addPj(argument: Character) {}

  // Getter para obtener personajes
  /*   get characters(): Character[] {
    return this.MkService.characters;
  } */

  // Inyectamos el servicio
  constructor() {}
}
