import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CardProjetosComponent } from './components/card-projetos/card-projetos.component';
import { CardCursosComponent } from './components/card-cursos/card-cursos.component';
import { IndexComponent } from './pages/index/index.component';

import { CardSobreComponent } from './components/card-apresentacao-inicial/card-sobre.component';
import { CardHistoriaComponent } from './components/card-historia/card-historia.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardProjetosComponent,
    CardCursosComponent,
    IndexComponent,
    CardSobreComponent,
    CardHistoriaComponent,
    ProjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
