import { Box, Typography, Avatar } from '@mui/material';
import { education } from '../../data/education';

export default function EducationSection() {
  const relevantCourses = education.relevantCoursework || [];

  return (
    <Box id="education">
      <Typography
        sx={{
          fontFamily: 'monospace',
          fontSize: '12px',
          color: 'text.secondary',
          marginBottom: '8px',
        }}
      >
        // education
      </Typography>
      <Box
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '4px',
          backgroundColor: 'background.paper',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <Box sx={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
          <Avatar
            sx={{
              width: 44,
              height: 44,
              backgroundColor: theme => theme.palette.mode === 'light' ? '#ddd' : '#444',
              border: '1px solid',
              borderColor: 'divider',
              fontSize: '10px',
              color: 'text.secondary',
            }}
          >
            CMU
          </Avatar>
          <Box>
            <Typography
              component="h3"
              sx={{
                fontFamily: 'monospace',
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'text.primary',
              }}
            >
              {education.school}
            </Typography>
            <Typography
              sx={{
                fontSize: '12px',
                color: 'text.secondary',
                marginTop: '3px',
              }}
            >
              {education.degree} · {education.period}
            </Typography>
            <Typography
              sx={{
                fontSize: '12px',
                color: 'text.primary',
                fontWeight: 'bold',
                marginTop: '3px',
              }}
            >
              GPA: {education.gpa}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: '10px',
            color: 'text.secondary',
            lineHeight: 1.6,
            fontFamily: 'monospace',
            marginTop: '8px',
          }}
        >
          {relevantCourses.map((course, idx) => (
            <Box key={idx}>
              {idx === relevantCourses.length - 1 ? '└─ ' : '├─ '}
              {course}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
