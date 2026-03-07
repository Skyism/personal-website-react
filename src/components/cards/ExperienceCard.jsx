import { Typography, Box, Chip } from '@mui/material';

export default function ExperienceCard({ experience }) {
  // Generate filename from experience
  const getFilename = (exp) => {
    const company = exp.company.toLowerCase().replace(/\s+/g, '_');
    const role = exp.title.toLowerCase().split(' ')[0];
    return `${company}_${role}.md`;
  };

  const filename = getFilename(experience);
  const periodDisplay = experience.current
    ? `${experience.period.split(' - ')[0]} – Present · current`
    : experience.period;

  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '4px',
        marginBottom: '16px',
        backgroundColor: 'background.paper',
        overflow: 'hidden',
      }}
    >
      {/* File Header */}
      <Box
        sx={{
          backgroundColor: theme => theme.palette.mode === 'light' ? '#ebebeb' : '#2a2a2a',
          borderBottom: '1px solid',
          borderColor: 'divider',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 12px',
        }}
      >
        <Box
          sx={{
            width: '14px',
            height: '14px',
            border: '1px solid',
            borderColor: 'text.secondary',
            backgroundColor: theme => theme.palette.mode === 'light' ? '#ddd' : '#444',
            fontSize: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'monospace',
          }}
        >
          📄
        </Box>
        <Typography
          sx={{
            fontFamily: 'monospace',
            fontSize: '11px',
            color: 'text.secondary',
          }}
        >
          {filename}
        </Typography>
        <Box sx={{ marginLeft: 'auto' }}>
          <Typography
            sx={{
              fontFamily: 'monospace',
              fontSize: '10px',
              color: 'text.secondary',
            }}
          >
            {periodDisplay}
          </Typography>
        </Box>
      </Box>

      {/* Card Body */}
      <Box sx={{ padding: '12px 16px' }}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 'bold',
            color: 'text.primary',
            marginBottom: '4px',
          }}
        >
          {experience.title}
        </Typography>
        <Typography
          sx={{
            fontSize: '12px',
            color: 'text.secondary',
            marginBottom: '8px',
            fontFamily: 'monospace',
          }}
        >
          {experience.company} · {experience.location}
        </Typography>

        <Box
          component="ul"
          sx={{
            fontSize: '12px',
            color: 'text.secondary',
            lineHeight: 1.7,
            paddingLeft: '16px',
            marginBottom: '10px',
            listStyle: 'none',
            '& li::marker': {
              content: '"// "',
              color: 'text.secondary',
            },
            '& li': {
              marginBottom: '4px',
            },
          }}
        >
          {experience.responsibilities.map((resp, index) => (
            <Typography
              key={index}
              component="li"
              sx={{
                fontSize: '12px',
                color: 'text.secondary',
                lineHeight: 1.7,
                paddingLeft: '16px',
                position: 'relative',
                '&::before': {
                  content: '"// "',
                  position: 'absolute',
                  left: 0,
                  color: 'text.secondary',
                },
              }}
            >
              {resp}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '10px' }}>
          {experience.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                fontFamily: 'monospace',
                fontSize: '10px',
                color: 'text.secondary',
                backgroundColor: theme => theme.palette.mode === 'light' ? '#f0f0f0' : '#2a2a2a',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '3px',
                padding: '2px 6px',
                height: 'auto',
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
