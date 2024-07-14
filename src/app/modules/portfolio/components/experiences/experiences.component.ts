import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interfaces/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public experiencesList = signal<IExperiences[]>(([
    {
      summary: {
        strong: "Software Engineer Intern",
        p: "Dell Technologies | May, 2024 - Present",
      },
      text: "Developed applications on cloud-based CRM platforms, gaining experience in microservices architecture and handling DevOps workflows. Main technologies: Salesforce.com, SOQL, Apex, JavaScript, TypeScript,  Angular, HTML, CSS, GitLab CI/CD and Jira."
    }
  ]))
}
