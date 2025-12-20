import { Box } from '@mui/material';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ResearchSection from '../components/sections/ResearchSection';
import LeadershipSection from '../components/sections/LeadershipSection';
import EducationSection from '../components/sections/EducationSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ResearchSection />
      <LeadershipSection />
      <EducationSection />
      <ContactSection />
    </Box>
  );
}
