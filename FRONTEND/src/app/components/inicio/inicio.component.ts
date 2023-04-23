import { Component } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  persona: persona = new persona("","","","");

  constructor(public personaService: PersonaService){

  }
  ngOnInit(): void{
    this.personaService.getPersona().subscribe(data => {this.persona = data});
  }
}
