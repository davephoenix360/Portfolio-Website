import { useMemo, useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projectTags, projects, Project } from '../data/projects';

const Projects: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (selectedTag === 'All') return projects;
    return projects.filter((project) => project.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <section className="section-shell">
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

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
        ))}
      </div>

      {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
    </section>
  );
};

export default Projects;
