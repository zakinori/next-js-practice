export type Skill = {
  name: string;
  years: number;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export const skillsData = {
  skillCategories: [
    {
      title: "フロントエンド",
      skills: [
        { name: "HTML5", years: 10 },
        { name: "CSS3", years: 6 },
        { name: "JavaScript", years: 10 },
        { name: "TypeScript", years: 2 },
        { name: "Next.js", years: 1 }
      ]
    },
    {
      title: "バックエンド",
      skills: [
        { name: "Python", years: 3 },
        { name: "Node.js", years: 3 },
        { name: "SQLServer", years: 10 },
        { name: "Oracle", years: 10 },
        { name: "PostgreSQL", years: 6 },
        { name: "MySQL", years: 2 }
      ]
    },
    {
      title: "インフラ",
      skills: [
        { name: "Windows", years: 10 },
        { name: "Linux", years: 6 },
        { name: "AWS", years: 5 },
        { name: "GCP", years: 2 },
        { name: "Azure", years: 1 }
      ]
    },
    {
      title: "その他・ツール",
      skills: [
        { name: "C#", years: 10 },
        { name: "VB.NET", years: 10 },
        { name: "PowerShell", years: 6 },
        { name: "Git", years: 8 },
        { name: "Docker", years: 2 }
      ]
    }
  ]
} as const; 