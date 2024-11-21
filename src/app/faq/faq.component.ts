import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqs = [
    { question: 'Como agendar uma consulta?', answer: 'Você pode agendar uma consulta diretamente pelo nosso site ou entrando em contato por telefone.' },
    { question: 'Quais serviços vocês oferecem?', answer: 'Oferecemos consultoria jurídica, defesa em processos judiciais, entre outros.' },
  ];
}
