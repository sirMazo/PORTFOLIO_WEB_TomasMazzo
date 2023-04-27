import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewExperienciaComponent } from './components/estudios-exp/exp/new-experiencia.component';
import { EditExperienciaComponent } from './components/estudios-exp/exp/edit-experiencia.component';
import { NewEducacionComponent } from './components/estudios-exp/estudios/new-educacion.component';
import { EditEducacionComponent } from './components/estudios-exp/estudios/edit-educacion.component';
import { EditPerfilComponent } from './components/inicio/perfil/edit-perfil.component';
import { EditContactoComponent } from './components/inicio/contacto/edit-contacto.component';
import { EditAcercaDeComponent } from './components/sobre-mi/edit-acerca-de/edit-acerca-de.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'editedu/:id', component: EditEducacionComponent},
  {path: 'editperfil/:id', component: EditPerfilComponent},
  {path: 'editcontacto/:id', component: EditContactoComponent},
  {path: 'editsobremi/:id', component: EditAcercaDeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
