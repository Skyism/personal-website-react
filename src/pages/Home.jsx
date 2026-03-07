import { Box } from '@mui/material';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ResearchSection from '../components/sections/ResearchSection';
import SideQuestSection from '../components/sections/SideQuestSection';
import EducationSection from '../components/sections/EducationSection';
import TerminalHero from '../components/sections/TerminalHero';
import SkillsSection from '../components/sections/SkillsSection';
import { SectionSeparator } from '../components/ui/CodeSectionHeader';

export default function Home() {
  return (
    <>
      <TerminalHero />
      <ExperienceSection />
      <ProjectsSection />
      <ResearchSection />
      <SectionSeparator />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
          gap: '20px',
          marginBottom: '32px',
        }}
      >
        <EducationSection />
        <SkillsSection />
        <SideQuestSection />
      </Box>
    </>
  );
}
