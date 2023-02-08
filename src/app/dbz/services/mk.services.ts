import { Injectable } from '@angular/core';
import { Character } from '../interfaces/mk.interfaces';

@Injectable()
export class MkService {
  constructor() {}

  private _characters: Character[] = [
    {
      name: 'Johnny Cage',
      power: 13000,
    },
    {
      name: 'Sonia',
      power: 12000,
    },
    {
      name: 'Goro',
      power: 18000,
    },
  ];

  get characters(): Character[] {
    return [...this._characters];
  }

  // Métodos
  addCharacters(char: Character) {
    this._characters.push(char);
  }
}
