import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { CharactersComponent } from './characters/characters.component';
import { AgregarComponent } from './agregar/agregar.component';
import { MkService } from './services/mk.services';

@NgModule({
  declarations: [MainPageComponent, CharactersComponent, AgregarComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainPageComponent],
  providers: [MkService],
})
export class MkModule {}
