import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './components/crear-cliente/crear-cliente.component';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '',redirectTo: 'inicio',pathMatch: 'full'},
  { path: 'inicio', component: InicioComponent },
  { path: 'home', component: HomeComponent },
  { path: 'listar-cliente', component: ListarClienteComponent},
  { path: 'crear-cliente', component: CrearClienteComponent},
  { path: 'editar-cliente/:id', component: CrearClienteComponent},
  { path: '**', component: ErrorComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
