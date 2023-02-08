import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/mk.interfaces';
import { MkService } from '../services/mk.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  @Input()
  newCharacter: Character = {
    name: '',
    power: 0,
  };

  /*   @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter(); */

  // Inyectamos el servicio en el constructior SIEMPRE
  constructor(private MkService: MkService) {}

  addCharacter() {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }

    this.MkService.addCharacters(this.newCharacter);

    // Limpiar los inputs
    this.newCharacter = {
      name: '',
      power: 0,
    };
  }
}
