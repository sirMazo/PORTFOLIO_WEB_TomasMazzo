import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import { TokenService } from 'src/app/services/token.service';



@Component({
  selector: 'app-estudios-exp',
  templateUrl: './estudios-exp.component.html',
  styleUrls: ['./estudios-exp.component.css'],
})

export class EstudiosComponent implements OnInit {
  expe: Experiencia[] = []; 
  showAlert = false;

  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService){ }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void{
    this.sExperiencia.lista().subscribe(data => {this.expe =data;})
  }

  delete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
          this.showAlert = true;
        }, err => {
          alert("No se pudo borrrar la experiencia laboral.");
        }
      )
    }
  }
  
  closeAlert() {
    this.showAlert = false; // ocultamos la alerta cuando el usuario la cierra
  }
}