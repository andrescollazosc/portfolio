export interface SkillCardModel {
  icon?: string;
  skillCardTextModel?: SkillCardTextModel[];
}

export interface SkillCardTextModel {
  title?: string;
  icons?: string[];
  description?: string;
}
