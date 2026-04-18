export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillGroup {
  title: string;
  skills: SkillItem[];
}
