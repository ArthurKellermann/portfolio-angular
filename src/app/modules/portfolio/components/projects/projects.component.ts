import { Component, signal } from '@angular/core';
import { IProjects } from '../../interfaces/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public listProjects = signal<IProjects[]>(([
    {
      src: 'assets/img/projects/project1.png',
      alt: 'Project 1',
      title: 'Project 1',
      width: '100px',
      height: '51px',
      description: 'Project 1 description',
      links: {
        name: 'Project 1',
        href: 'https://github.com/ArthurKellermann',
      }
    }
  ]));
}
