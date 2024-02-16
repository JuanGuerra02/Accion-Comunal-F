import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

const routes: Routes = [
  { path: '', redirectTo: 'quienes-somos', pathMatch: 'full' },
  { path: 'quienes-somos', component: QuienesSomosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcercaDeNosotrosRoutingModule { }
