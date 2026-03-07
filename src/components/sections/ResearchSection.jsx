import { Box, Typography, Chip } from '@mui/material';
import AnimatedSection from '../ui/AnimatedSection';
import CodeSectionHeader, { SectionSeparator } from '../ui/CodeSectionHeader';
import { research } from '../../data/research';

export default function ResearchSection() {
  return (
    <>
      <SectionSeparator />
      <Box id="research" sx={{ marginBottom: '32px' }}>
        <CodeSectionHeader
          comment="// research"
          title="Research"
        />
        {research.map((item, index) => (
          <AnimatedSection key={item.id} delay={index * 0.1}>
            <Box
              sx={{
                borderLeft: '3px solid',
                borderColor: 'text.secondary',
                paddingLeft: '16px',
                marginBottom: '16px',
              }}
            >
              <Typography
                component="h4"
                sx={{
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  color: 'text.primary',
                  fontWeight: 'bold',
                  marginBottom: '4px',
                }}
              >
                {item.title} — {item.lab || item.institution}
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  marginTop: '4px',
                }}
              >
                {item.period} · {item.description}
              </Typography>
              {item.responsibilities.length > 0 && (
                <Box sx={{ marginTop: '8px' }}>
                  {item.responsibilities.map((resp, idx) => (
                    <Typography
                      key={idx}
                      sx={{
                        fontSize: '12px',
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        marginTop: '4px',
                      }}
                    >
                      {resp}
                    </Typography>
                  ))}
                </Box>
              )}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: '8px' }}>
                {item.technologies.map((tech) => (
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
              {item.publication && (
                <Box
                  sx={{
                    fontFamily: 'monospace',
                    fontSize: '10px',
                    border: '1px solid',
                    borderColor: 'text.secondary',
                    display: 'inline-block',
                    padding: '2px 8px',
                    marginTop: '6px',
                    color: 'text.secondary',
                  }}
                >
                  📄 PUBLISHED — {item.publication.journal} {item.publication.year}
                </Box>
              )}
            </Box>
          </AnimatedSection>
        ))}
      </Box>
    </>
  );
}
