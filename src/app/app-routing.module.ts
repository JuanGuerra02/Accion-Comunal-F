import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
 { path: '', redirectTo: 'inicio', pathMatch: 'full' },
 { path: 'header', component: HeaderComponent },
 { path: 'inicio', component: InicioComponent },
 { path: 'quienes-somos', loadChildren: () => import('./acerca-de-nosotros/acerca-de-nosotros.module').then(m => m.AcercaDeNosotrosModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
