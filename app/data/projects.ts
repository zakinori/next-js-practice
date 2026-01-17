export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: readonly string[];
  period: string;
  role: string;
  details: string;
  challenges: readonly string[];
  achievements: readonly string[];
};

export const projectsData = {
  projects: [
    {
      title: "医療関係基幹システム刷新",
      description: "スクラムを利用したシステム刷新を行っていました。",
      image: "/nextjs-logotype-light-background.png",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS CDK", "GitHubActions", "Slack", "Jira", "Confluence"] as const,
      period: "2025年03月 - 2025年12月",
      role: "フルスタック開発者",
      details: "フロント部分のWebアプリケーションを開発、および、GitHubActions+AWS CDKのCI/CDを担当。",
      challenges: [
        "フロントエンドの刷新",
        "バックエンドの刷新",
        "AWS関連のPoC",
      ] as const,
      achievements: [
        "アジャイル開発（スクラム）手法の理解",
        "開発環境セットアップ手順の改善",
        "NEXT.jsの学習を目的にポートフォリオサイトを作成",
      ] as const
    },
    {
      title: "まとめサイト保守運営",
      description: "クローラーを利用した情報収集と、まとめサイトの保守運営を行っています。",
      image: "/python-logo-master-v3-TM-flattened.png",
      technologies: ["Python", "PowerShell", "GIT", "Cursor"] as const,
      period: "2023年4月 - 現在",
      role: "クローラー開発担当",
      details: "定期的な情報収集と更新サイトの構築案を作成しています。",
      challenges: [
        "収集データの品質管理",
        "サイト負荷を考慮したディレイの実装・ROBOT.txtの考慮",
      ] as const,
      achievements: [
        "最適な情報収集案の提示",
        "収集情報の保管方法について提案・改善",
      ] as const
    },
    {
      title: "Webサービス刷新",
      description: "老朽化したマッチングアプリのリプレースを行っています。",
      image: "/laravel-logo.png",
      technologies: ["PHP", "Laravel", "Vue.js", "MySql", "Docker", "GIT", "Slack", "Backlog"] as const,
      period: "2025年1月 - 現在",
      role: "フルスタック開発者",
      details: "SymfonyからLaravelへの言語変更およびサイトリプレースを担当。",
      challenges: [
        "フロントエンドの刷新",
        "バックエンドの刷新",
      ] as const,
      achievements: [
        "Laravel Sailを利用した開発環境一括セットアップの理解",
        "Laravelを利用したWebサービス構築方法の理解",
      ] as const
    },
    {
      title: "プロジェクト",
      description: "取組中・・・",
      image: "/project3.jpg",
      technologies: [""] as const,
      period: "準備中",
      role: "開発予定",
      details: "新しいプロジェクトの準備を進めています。",
      challenges: [
        "要件定義",
        "技術選定",
        "開発計画の立案"
      ] as const,
      achievements: [
        "準備中"
      ] as const
    }
  ]
} as const; 