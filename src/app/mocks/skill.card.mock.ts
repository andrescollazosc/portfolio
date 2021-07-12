import { SkillCardModel } from '../models/skill-card.model';

export class SkillCardMock {
  public static getConfigurationCard(): SkillCardModel[] {
    return [{
      icon: 'far fa-window-maximize',
      skillCardTextModel: [
        {
          title: 'Front end',
          icons: ['fab fa-js', 'fab fa-angular', 'fab fa-react'],
          description:
            'As a front-end developer I have had the opportunity to work for different business sectors in which I have obtained skills in the design and development of SPA applications in different tools.',
        },
        {
          title: 'programming languages and tools',
          description: 'In my experience as a front-end developer, I have had the opportunity to work with frameworks like Angular 2+ (typescript), react js and vanilla js in addition to working with style preprocessors like SASS and techniques like BEM.',
        },
      ],
    }, 
    {
        icon: 'fas fa-cogs',
        skillCardTextModel: [
          {
            title: 'back end',
            description:
              'In my experience as a backend developer, I have been able to work for different sectors such as transportation, banking, logistics and other important sectors in which I have gained significant experience, always applying the best development practices.',
          },
          {
            title: 'programming languages and tools',
            description: 'I have experience in tools like C#, DotNet, DotNet core, Entity Framework and EF core, linq, sql server, mongo and code repositories like github, gitlab and azure devops.',
          },
        ],
      }];
  }
}
