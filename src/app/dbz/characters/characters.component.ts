import { Component, Input } from '@angular/core';
import { MkService } from '../services/mk.services';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent {
  get characters() {
    return this.MkService.characters;
  }

  constructor(private MkService: MkService) {}
}
