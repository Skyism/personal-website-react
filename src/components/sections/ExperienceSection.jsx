import { Box } from '@mui/material';
import AnimatedSection from '../ui/AnimatedSection';
import ExperienceCard from '../cards/ExperienceCard';
import CodeSectionHeader, { SectionSeparator } from '../ui/CodeSectionHeader';
import { experiences } from '../../data/experiences';

export default function ExperienceSection() {
  return (
    <>
      <SectionSeparator />
      <Box id="experience" sx={{ marginBottom: '32px' }}>
        <CodeSectionHeader
          comment="// experience"
          title="Experience"
          subtitle={`// ${experiences.length} roles`}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {experiences.map((experience, index) => (
            <AnimatedSection key={experience.id} delay={index * 0.1}>
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </Box>
      </Box>
    </>
  );
}
