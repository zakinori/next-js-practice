'use client';

import { motion } from 'framer-motion';

interface WorkExperience {
  period: string;
  company: string;
  position: string;
  description: string;
}

interface Certification {
  name: string;
  date: string;
  issuer: string;
}

const workExperiences: WorkExperience[] = [
  {
    period: '2012年4月 - 2018年2月',
    company: '株式会社フューチャーイン',
    position: 'システムエンジニア',
    description: 'クライアントサーバーのシステムを中心に受託開発の形でシステム開発を経験。業種問わず基本設計から納品までを実施。'
  },
  {
    period: '2018年3月 - 2025年2月',
    company: '株式会社ゲオホールディングス',
    position: 'システムエンジニア→マネージャー',
    description: '内製社内SEとしてシステム保守作業を中心に要件定義から保守まで全工程を経験。社員19名、BP7名の管理経験あり。'
  },
  {
    period: '2025年4月 - 現在',
    company: '株式会社クリア',
    position: 'システムエンジニア',
    description: 'SESとしてシステム開発を実施中。要件定義から納品までを実施予定。入社と同時に副業をスタート。'
  },
];

const certifications: Certification[] = [
  {
    name: '基本情報技術者試験',
    date: '2008年10月',
    issuer: '経済産業省'
  },
  {
    name: '簿記検定二級',
    date: '2008年11月',
    issuer: '日本商工会議所'
  },
  {
    name: '応用情報技術者試験',
    date: '2009年10月',
    issuer: '経済産業省'
  },
  {
    name: 'データベーススペシャリスト',
    date: '2011年4月',
    issuer: '経済産業省'
  },
];

export const Experience = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">職歴・資格</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 職歴セクション */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">職歴</h3>
            <div className="space-y-6">
              {workExperiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <p className="text-sm text-gray-600 mb-1">{exp.period}</p>
                  <h4 className="text-lg font-semibold text-gray-800">{exp.company}</h4>
                  <p className="text-gray-700 mb-2">{exp.position}</p>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 資格セクション */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">保有資格</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <h4 className="text-lg font-semibold text-gray-800">{cert.name}</h4>
                  <p className="text-sm text-gray-600">取得日: {cert.date}</p>
                  <p className="text-sm text-gray-600">発行機関: {cert.issuer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 