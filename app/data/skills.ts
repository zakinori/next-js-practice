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
        { name: "jQuery", years: 6 },
        { name: "Bootstrap", years: 6 },
        { name: "Next.js", years: 1 },
        { name: "React", years: 1 },
        { name: "TypeScript", years: 1 },
        { name: "Tailwind CSS", years: 1 },
      ]
    },
    {
      title: "バックエンド・その他言語",
      skills: [
        { name: "C#", years: 10 },
        { name: "VB.NET", years: 10 },
        { name: "PowerShell", years: 6 },
        { name: "Python", years: 3 },
        { name: "Node.js", years: 3 },
      ]
    },
    {
      title: "データベース",
      skills: [
        { name: "SQLServer", years: 10 },
        { name: "Oracle", years: 10 },
        { name: "PostgreSQL", years: 6 },
        { name: "MySQL", years: 2 },
        { name: "SQLite", years: 1 },
      ]
    },
    {
      title: "インフラ",
      skills: [
        { name: "Windows", years: 10 },
        { name: "Linux", years: 6 },
        { name: "VMware", years: 2 },
        { name: "Docker", years: 2 },
        { name: "AWS", years: 5 },
        { name: "GCP", years: 2 },
        { name: "Azure", years: 1 },
      ]
    },
    {
      title: "ツール",
      skills: [
        { name: "Microsoft Office", years: 10 },
        { name: "Google Workspace", years: 7 },
        { name: "Git", years: 8 },
        { name: "Slack", years: 8 },
        { name: "Backlog", years: 7 },
        { name: "Notion", years: 8 },
        { name: "Trello", years: 4 },
      ]
    }
  ]
} as const; 