import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private elementRef: ElementRef) {}

  scrollTo(section: string) {
    const element = this.elementRef.nativeElement.querySelector('#' + section);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Aquí se puede agregar codigo cuando se desplace ...
  }
}