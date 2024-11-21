import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  slides = [
    { image: 'assets/img/advogado.jpg', title: 'Serviço 1', description: 'Consultoria Jurídica Especializada' },
    { image: 'assets/img/advogado2.jpeg', title: 'Serviço 2', description: 'Defesa em Processo Judicial' },
    { image: 'assets/img/advogados3.jpg', title: 'Serviço 3', description: 'Consultoria Trabalhista' }
  ];
}
