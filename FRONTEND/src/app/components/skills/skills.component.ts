import { Component } from '@angular/core';
import { ImportScriptService } from './../../services/import-script.service';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({ opacity: 0 }))
      ])
    ])
  ]
})

export class SkillsComponent{
  constructor( private _ImportScript:ImportScriptService ){
    _ImportScript.cargar(["skills"]);
  }

  content = 1;
  show = true;

  showContent(num: number) {
    this.content = num;
  }
}