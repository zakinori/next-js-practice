'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image: string;
    technologies: readonly string[];
    details?: string;
    period?: string;
    role?: string;
    challenges?: readonly string[];
    achievements?: readonly string[];
  };
}

export const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative aspect-video">
            <div className="absolute inset-0 bg-gray-200">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-gray-600 mb-6">{project.description}</p>

            {project.period && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-1">期間</h4>
                <p className="text-gray-600">{project.period}</p>
              </div>
            )}

            {project.role && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-1">担当</h4>
                <p className="text-gray-600">{project.role}</p>
              </div>
            )}

            {project.details && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-1">詳細</h4>
                <p className="text-gray-600">{project.details}</p>
              </div>
            )}

            {project.challenges && project.challenges.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-1">課題</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}

            {project.achievements && project.achievements.length > 0 && (
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-1">成果</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {project.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-2">使用技術</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}; 