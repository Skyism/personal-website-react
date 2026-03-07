import { Box, Avatar, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import SocialLinks from '../ui/SocialLinks';
import { personalInfo } from '../../data/personal';
import { experiences } from '../../data/experiences';
import { projects } from '../../data/projects';

export default function Sidebar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Don't show sidebar on mobile or non-home pages
  if (isMobile || !isHomePage) {
    return null;
  }

  const currentExperiences = experiences.filter(exp => exp.current);
  const projectCount = projects.length;

  const navItems = [
    { label: 'about', id: 'about' },
    { label: 'experience', id: 'experience' },
    { label: 'projects', id: 'projects' },
    { label: 'research', id: 'research' },
    { label: 'education', id: 'education' },
  ];

  return (
    <Box
      sx={{
        width: 270,
        flexShrink: 0,
        borderRight: '1px solid',
        borderColor: 'divider',
        backgroundColor: theme => theme.palette.mode === 'light' ? '#fafafa' : '#1a1a1a',
        padding: '24px 0',
        position: 'sticky',
        top: 52,
        height: 'calc(100vh - 52px)',
        overflowY: 'auto',
      }}
    >
      {/* Profile Card */}
      <Box
        sx={{
          padding: '0 20px 16px',
          borderBottom: '1px dashed',
          borderColor: 'divider',
          marginBottom: '16px',
          paddingBottom: '16px',
        }}
      >
        <Avatar
          src={personalInfo.profileImage}
          alt={personalInfo.name}
          sx={{
            width: 48,
            height: 48,
            marginBottom: '8px',
            border: '1px solid',
            borderColor: 'divider',
          }}
        />
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 'bold',
            color: 'text.primary',
            fontFamily: 'monospace',
          }}
        >
          {personalInfo.name}
        </Typography>
        <Typography
          sx={{
            fontSize: '12px',
            color: 'text.secondary',
            fontFamily: 'monospace',
          }}
        >
          {personalInfo.subtitle}
        </Typography>
        <Typography
          sx={{
            fontSize: '12px',
            color: 'text.secondary',
            fontFamily: 'monospace',
            marginTop: '4px',
          }}
        >
          {personalInfo.location}
        </Typography>
        <Box sx={{ marginTop: '10px', display: 'flex', gap: '6px' }}>
          <SocialLinks spacing={0.5} />
        </Box>
      </Box>

      {/* Navigation */}
      <Box sx={{ padding: '0 20px', marginBottom: '24px' }}>
        <Typography
          sx={{
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: 'text.secondary',
            marginBottom: '8px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Navigate
        </Typography>
        {navItems.map((item) => (
          <ScrollLink
            key={item.id}
            to={item.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 8px',
                borderRadius: '4px',
                marginBottom: '2px',
                cursor: 'pointer',
                fontSize: '13px',
                color: 'text.secondary',
                fontFamily: 'monospace',
                '&:hover': {
                  backgroundColor: theme => theme.palette.mode === 'light' ? '#e8e8e8' : '#2a2a2a',
                  color: 'text.primary',
                },
                '&::before': {
                  content: '">"',
                  color: 'text.secondary',
                },
              }}
            >
              {item.label}
            </Box>
          </ScrollLink>
        ))}
      </Box>

      {/* Status */}
      <Box sx={{ padding: '0 20px', marginBottom: '24px' }}>
        <Typography
          sx={{
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: 'text.secondary',
            marginBottom: '8px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Status
        </Typography>
        <Box
          sx={{
            fontSize: '12px',
            color: 'text.secondary',
            fontFamily: 'monospace',
            lineHeight: 1.9,
          }}
        >
          {currentExperiences.map((exp, idx) => (
            <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: 'text.primary',
                  flexShrink: 0,
                }}
              />
              <span>{exp.title} @ {exp.company}</span>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Quick Stats */}
      <Box sx={{ padding: '0 20px' }}>
        <Typography
          sx={{
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            color: 'text.secondary',
            marginBottom: '8px',
            fontFamily: 'Arial, sans-serif',
          }}
        >
          Quick Stats
        </Typography>
        <Box
          sx={{
            fontSize: '12px',
            color: 'text.secondary',
            fontFamily: 'monospace',
            lineHeight: 2,
          }}
        >
          <Box>GPA: <strong>{personalInfo.gpa}</strong></Box>
          <Box>Projects: <strong>{projectCount}+</strong></Box>
          <Box>Users: <strong>500+</strong></Box>
          <Box>Grad: <strong>{personalInfo.graduationDate}</strong></Box>
        </Box>
      </Box>
    </Box>
  );
}
