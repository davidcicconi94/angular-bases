import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';

// TAREA: Crear un modulo llamado ContadorModule, hacer declaraciones y exportaciones

@NgModule({
  //En declaraciones van los Componentes
  declarations: [AppComponent],

  //En imports van los módulos
  imports: [BrowserModule, HeroesModule, ContadorModule],

  //Parecido a los servicios
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
