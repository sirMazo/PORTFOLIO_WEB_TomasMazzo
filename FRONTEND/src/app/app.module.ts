import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Init Service
import { ImportScriptService } from './services/import-script.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/sobre-mi/acerca-de.component';
import { InicioComponent } from './components/inicio/inicio.component';
import {  EstudiosExp } from './components/estudios-exp/estudios-exp.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NewExperienciaComponent } from './components/estudios-exp/exp/new-experiencia.component';



// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { interceptorProvider } from './services/interceptor-service';
import { EditExperienciaComponent } from './components/estudios-exp/exp/edit-experiencia.component';
import { NewEducacionComponent } from './components/estudios-exp/estudios/new-educacion.component';
import { EditEducacionComponent } from './components/estudios-exp/estudios/edit-educacion.component';
import { EditPerfilComponent } from './components/inicio/perfil/edit-perfil.component';
import { NewTituloComponent } from './components/inicio/perfil/titulos/new-titulo.component';
import { EditContactoComponent } from './components/inicio/contacto/edit-contacto.component';
import { EditAcercaDeComponent } from './components/sobre-mi/edit-acerca-de/edit-acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    InicioComponent,
    EstudiosExp,
    NewExperienciaComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    EditPerfilComponent,
    NewTituloComponent,
    EditContactoComponent,
    EditAcercaDeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    ImportScriptService,
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
