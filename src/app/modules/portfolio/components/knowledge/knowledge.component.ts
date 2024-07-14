import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interfaces/IKnowledge.inteface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public knowledgeList = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html.svg',
      alt: 'HTMl Icon',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'CSS Icon',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'JavaScript Icon',
    },
    {
      src: 'assets/icons/knowledge/typescript.svg',
      alt: 'TypeScript Icon',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Angular Icon',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Nodejs Icon',
    },

  ]);
}
