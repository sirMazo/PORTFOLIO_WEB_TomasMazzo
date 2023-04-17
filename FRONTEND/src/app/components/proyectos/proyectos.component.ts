import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  cards = [
    {
      title: 'Red Social Simple',
      content: 'Contenido de la tarjeta 1',
      backgroundImage: 'url(../../../assets/images/proyectos/red-social.jpg)'
    },
    {
      title: 'E-Commerce',
      content: 'Contenido de la tarjeta 2',
      backgroundImage: 'url(../../../assets/images/proyectos/E-commerce.jpg)'
    },
    {
      title: 'E-learning',
      content: 'Contenido de la tarjeta 3',
      backgroundImage: 'url(../../../assets/images/proyectos/elearning.jpg)'
    },
  ];

  currentCard = -1;
  cardText = '  ';
  
  @HostListener('document:click', ['$event.target'])
  onClick(targetElement: HTMLElement) {
    const card = targetElement.closest('.card');
    const isClickedInside = card?.classList.contains('card');
    if (isClickedInside) {
      this.currentCard = +card?.getAttribute('data-card-index')!;
      this.setCardText();
    } else {
      this.currentCard = -1;
    }
  }

  selectCard(index: number) {
    this.currentCard = index;
    this.setCardText();
  
    // Agrega un retardo de 100ms antes de mostrar el contenido de la tarjeta
    setTimeout(() => {
      // Obtener la referencia al elemento "card-info"
      const cardInfo = document.querySelector('.card-info') as HTMLElement;
      if (cardInfo) {
        // Establece la opacidad a 1 y la visibilidad a visible para el div con clase "card-info"
        cardInfo.style.opacity = '1';
        cardInfo.style.visibility = 'visible';
      }
    
      // Obtener la referencia al elemento "card-counter"
      const cardCounter = document.querySelector('.card-counter') as HTMLElement;
      if (cardCounter) {
        // Establece la opacidad a 1 y la visibilidad a visible para el párrafo con clase "card-count"
        cardCounter.style.opacity = '1';
        cardCounter.style.visibility = 'visible';
      }
    }, 100);
  }

  prevCard(event: Event) {
    event.stopPropagation();
    this.currentCard = (this.currentCard === 0 || this.currentCard === -1) ? (this.cards.length - 1) : (this.currentCard - 1);
    this.setCardText();
  }

  nextCard(event: Event) {
    event.stopPropagation();
    this.currentCard = (this.currentCard === this.cards.length - 1 || this.currentCard === -1) ? 0 : (this.currentCard + 1);
    this.setCardText();
  }

  setCardText() {
    if (this.currentCard >= 0) {
      this.cardText = `Este es el proyecto ${this.currentCard + 1}: ${this.cards[this.currentCard].title}`;
    } else {
      this.cardText = "";
    }
  }



}