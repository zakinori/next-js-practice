'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* プロフィールセクション */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">Career Overview</h3>
            <p className="text-gray-400">
              SIer, 社内SE, SESを経験しており、IT業界に10年以上従事。
              現在はSESとして活動する傍ら、サービス開発に着手中。
            </p>
          </motion.div>

          {/* リンクセクション */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-400 hover:text-white transition-colors">
                  Skills
                </Link>
              </li>
            </ul>
          </motion.div> */}

          {/* コンタクトセクション */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold">コンタクト</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:chogifu@gmail.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Image src="/icons/gmail.svg" alt="Gmail" width={20} height={20} className="w-5 h-5" />
                  Gmail
                </a>
              </li>
              <li>
                <a href="https://github.com/zakinori" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Image src="/icons/github.svg" alt="GitHub" width={20} height={20} className="w-5 h-5" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://x.com/zakinori_Hi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Image src="/icons/x-twitter.svg" alt="X(Twitter)" width={20} height={20} className="w-5 h-5" />
                  X(Twitter)
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* コピーライト */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; {currentYear} zakinori&apos;s Portfolio. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};
