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
      title: "まとめサイト保守運営",
      description: "クローラーを利用した情報収集と、まとめサイトの保守運営を行っています。",
      image: "/project1.jpg",
      technologies: ["Python", "PowerShell", "GIT"] as const,
      period: "2023年4月 - 現在",
      role: "保守・運用担当",
      details: "定期的な情報収集と更新、サイトのパフォーマンス改善、セキュリティ対策を実施しています。",
      challenges: [
        "クローラーの安定性確保",
        "収集データの品質管理",
        "サイトのレスポンス改善"
      ] as const,
      achievements: [
        "自動更新システムの構築",
        "ページロード時間の50%改善",
        "セキュリティ脆弱性の解消"
      ] as const
    },
    {
      title: "物流パッケージ開発",
      description: "小規模でクローズドのネットワークを持つ拠点向けのパッケージ開発を行っています。",
      image: "/project2.jpg",
      technologies: ["Next.js", "Node.js", "SQLite"] as const,
      period: "2023年10月 - 現在",
      role: "フルスタック開発者",
      details: "物流拠点の業務効率化のためのWebアプリケーションを開発しています。",
      challenges: [
        "オフライン対応の実装",
        "データ同期の最適化",
        "UI/UXの改善"
      ] as const,
      achievements: [
        "業務効率の30%向上",
        "データ入力ミスの90%削減",
        "ユーザー満足度の向上"
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