import { SkillCardModel } from '../models/skill-card.model';
export class SkillCardMock {
  public static getConfigurationCard(): SkillCardModel[] {
    return [{
      icon: 'far fa-window-maximize',
      skillCardTextModel: [
        {
          title: 'Front end',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ab ad. Dolorem, ducimus enim, modi aspernatur eveniet sunt reprehenderit sint asperiores libero reiciendis placeat aut minima fugit id cupiditate nostrum.',
        },
        {
          title: 'programming languages and tools',
          description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit reprehenderit hic possimus, enim voluptatem quia eligendi excepturi iure, adipisci fuga laudantium accusantium ipsam quisquam harum officia fugiat. Libero, eum.F',
        },
      ],
    }, 
    {
        icon: 'fas fa-cogs',
        skillCardTextModel: [
          {
            title: 'back end',
            description:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, ab ad. Dolorem, ducimus enim, modi aspernatur eveniet sunt reprehenderit sint asperiores libero reiciendis placeat aut minima fugit id cupiditate nostrum.',
          },
          {
            title: 'programming languages and tools',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit reprehenderit hic possimus, enim voluptatem quia eligendi excepturi iure, adipisci fuga laudantium accusantium ipsam quisquam harum officia fugiat. Libero, eum.F',
          },
        ],
      }];
  }
}
