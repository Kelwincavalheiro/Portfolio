import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';

const routes: Routes = [
  {path:'', component:IndexComponent},
  {path: 'projetos', component:ProjetosComponent},
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
