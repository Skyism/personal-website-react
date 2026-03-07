import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../ui/AnimatedSection';
import CodeSectionHeader, { SectionSeparator } from '../ui/CodeSectionHeader';
import { projects } from '../../data/projects';

const categoryIcons = {
  PROFESSIONAL: '🗂️',
  HACKATHON: '🏆',
  PERSONAL: '🤖',
  ACADEMIC: '📚',
  ALL: '📁',
};

const getProjectIcon = (category) => {
  const icons = {
    PROFESSIONAL: '🗂️',
    HACKATHON: '🏆',
    PERSONAL: '🤖',
    ACADEMIC: '📚',
  };
  return icons[category] || '📝';
};

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const navigate = useNavigate();

  const filteredProjects =
    selectedCategory === 'ALL'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const categories = ['ALL', 'PROFESSIONAL', 'HACKATHON', 'PERSONAL', 'ACADEMIC'];

  return (
    <>
      <SectionSeparator />
      <Box id="projects" sx={{ marginBottom: '32px' }}>
        <CodeSectionHeader
          comment="/* projects */"
          title="Projects"
          subtitle="// ls ./projects/"
        />

        {/* Category Tabs */}
        <Box
          sx={{
            display: 'flex',
            gap: 0,
            borderBottom: '1px solid',
            borderColor: 'divider',
            marginBottom: 0,
          }}
        >
          {categories.map((cat) => (
            <Box
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              sx={{
                padding: '6px 14px',
                fontSize: '11px',
                color: selectedCategory === cat ? 'text.primary' : 'text.secondary',
                border: '1px solid',
                borderColor: selectedCategory === cat ? 'divider' : 'transparent',
                borderBottom: selectedCategory === cat ? 'none' : '1px solid',
                borderBottomColor: selectedCategory === cat ? 'transparent' : 'divider',
                backgroundColor: selectedCategory === cat
                  ? (theme => theme.palette.mode === 'light' ? '#f5f5f5' : '#2a2a2a')
                  : 'transparent',
                fontFamily: 'monospace',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: theme => theme.palette.mode === 'light' ? '#f5f5f5' : '#2a2a2a',
                },
              }}
            >
              {categoryIcons[cat]} {cat === 'ALL' ? 'all/' : cat.toLowerCase() + '/'}
            </Box>
          ))}
        </Box>

        {/* File Explorer */}
        <Box
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: '4px',
            backgroundColor: 'background.paper',
            overflow: 'hidden',
            marginTop: 0,
          }}
        >
          <Box
            sx={{
              backgroundColor: theme => theme.palette.mode === 'light' ? '#ebebeb' : '#2a2a2a',
              borderBottom: '1px solid',
              borderColor: 'divider',
              padding: '8px 12px',
              fontFamily: 'monospace',
              fontSize: '11px',
              color: 'text.secondary',
            }}
          >
            ~/projects/ — {filteredProjects.length} items
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: 0,
            }}
          >
            {filteredProjects.map((project, index) => (
              <Box
                key={project.id}
                onClick={() => navigate(`/projects/${project.slug}`)}
                sx={{
                  border: '1px solid',
                  borderColor: 'divider',
                  padding: '14px',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                  backgroundColor: project.featured
                    ? (theme => theme.palette.mode === 'light' ? '#f0f0f0' : '#2a2a2a')
                    : 'transparent',
                  '&:hover': {
                    backgroundColor: theme => theme.palette.mode === 'light' ? '#f5f5f5' : '#333',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '20px',
                    marginBottom: '6px',
                  }}
                >
                  {getProjectIcon(project.category)}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'monospace',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: 'text.primary',
                    marginBottom: '3px',
                  }}
                >
                  {project.title.split(':')[0].toLowerCase().replace(/\s+/g, '-')}/
                </Typography>
                <Typography
                  sx={{
                    fontSize: '10px',
                    color: 'text.secondary',
                    lineHeight: 1.4,
                    marginBottom: '4px',
                  }}
                >
                  {project.shortDescription}
                </Typography>
                <Box
                  sx={{
                    display: 'inline-block',
                    fontFamily: 'monospace',
                    fontSize: '9px',
                    color: 'text.secondary',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: '2px',
                    padding: '1px 4px',
                    marginTop: '4px',
                  }}
                >
                  {project.category} {project.links?.live ? `· ${project.links.live.replace('https://', '')}` : ''}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
