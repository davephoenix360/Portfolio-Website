import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { fadeUp, staggerContainer } from '../components/motion';
import { projectTags, projects, Project } from '../data/projects';

const Projects: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const reducedMotion = useReducedMotion();

  const filtered = useMemo(() => {
    if (selectedTag === 'All') return projects;
    return projects.filter((project) => project.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <motion.section
      className="section-shell"
      variants={staggerContainer(reducedMotion)}
      initial="hidden"
      animate="show"
    >
      <SectionHeader
        eyebrow="Projects"
        title="Systems and products I've been building"
        description="Representative work across AI, backend, DevOps, and full-stack surfaces. Filter by interest to explore."
        actions={
          <div className="flex flex-wrap gap-2">
            <button
              className={`pill ${selectedTag === 'All' ? 'bg-accent text-white' : ''}`}
              onClick={() => setSelectedTag('All')}
            >
              All
            </button>
            {projectTags.map((tag) => (
              <button
                key={tag}
                className={`pill ${selectedTag === tag ? 'bg-accent text-white' : ''}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        }
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, index) => {
          const isFeatured = project.featured ?? (selectedTag === 'All' && index === 0);
          return (
            <motion.div
              key={project.id}
              variants={fadeUp(reducedMotion)}
              className={isFeatured ? 'lg:col-span-2' : ''}
            >
              <ProjectCard project={project} onOpen={setActiveProject} featured={isFeatured} />
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            key={activeProject.id}
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;
