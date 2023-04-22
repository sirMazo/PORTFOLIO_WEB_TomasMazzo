import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Init Service
import { ImportScriptService } from './services/import-script.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { SkillsComponent } from './components/skills/skills.component';


// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    InicioComponent,
    EstudiosComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ImportScriptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
