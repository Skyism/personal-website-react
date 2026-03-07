import { Box, Typography } from '@mui/material';
import { technicalSkills } from '../../data/education';

export default function SkillsSection() {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: 'monospace',
          fontSize: '12px',
          color: 'text.secondary',
          marginBottom: '8px',
        }}
      >
        // skills
      </Typography>
      <Box
        sx={{
          fontFamily: 'monospace',
          fontSize: '12px',
          lineHeight: 1.9,
          color: 'text.secondary',
        }}
      >
        <Box sx={{ color: 'text.secondary', marginTop: '8px' }}>
          Languages:
        </Box>
        <Box sx={{ color: 'text.primary', marginLeft: '16px' }}>
          {technicalSkills.languages.join(' · ')}
        </Box>
        <Box sx={{ color: 'text.secondary', marginTop: '8px' }}>
          Frameworks:
        </Box>
        <Box sx={{ color: 'text.primary', marginLeft: '16px' }}>
          {technicalSkills.frameworks.join(' · ')}
        </Box>
        <Box sx={{ color: 'text.secondary', marginTop: '8px' }}>
          Databases:
        </Box>
        <Box sx={{ color: 'text.primary', marginLeft: '16px' }}>
          {technicalSkills.databases.join(' · ')}
        </Box>
        <Box sx={{ color: 'text.secondary', marginTop: '8px' }}>
          Tools:
        </Box>
        <Box sx={{ color: 'text.primary', marginLeft: '16px' }}>
          {technicalSkills.tools.join(' · ')}
        </Box>
      </Box>
    </Box>
  );
}
