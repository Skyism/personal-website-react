import { Box } from '@mui/material';
import HeroAboutSection from '../components/sections/HeroAboutSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ResearchSection from '../components/sections/ResearchSection';
import SideQuestSection from '../components/sections/SideQuestSection';
import LeadershipSection from '../components/sections/LeadershipSection';
import EducationSection from '../components/sections/EducationSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <Box>
      <HeroAboutSection />
      <SideQuestSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <ResearchSection />
      {/* <LeadershipSection /> */}
      {/* <ContactSection /> */}
    </Box>
  );
}
