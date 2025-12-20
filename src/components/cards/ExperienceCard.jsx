import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  useTheme,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function ExperienceCard({ experience }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'visible',
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: 4,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, pl: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
          <Box
            sx={{
              mr: 2,
              p: 1,
              borderRadius: 2,
              background: (theme) =>
                theme.palette.mode === 'light'
                  ? 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)'
                  : 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {experience.type === 'teaching' ? (
              <SchoolIcon sx={{ color: 'primary.main' }} />
            ) : (
              <WorkIcon sx={{ color: 'primary.main' }} />
            )}
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5" component="h3" fontWeight={600} gutterBottom>
              {experience.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              {experience.company}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <CalendarTodayIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {experience.period}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <LocationOnIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {experience.location}
            </Typography>
          </Box>
        </Box>

        <Typography variant="body2" color="text.secondary" paragraph>
          {experience.description}
        </Typography>

        <Box component="ul" sx={{ pl: 2, mb: 2 }}>
          {experience.responsibilities.map((resp, index) => (
            <Typography
              key={index}
              component="li"
              variant="body2"
              color="text.secondary"
              sx={{ mb: 0.5 }}
            >
              {resp}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {experience.technologies.slice(0, 5).map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                fontSize: '0.75rem',
                height: 24,
                background: (theme) =>
                  theme.palette.mode === 'light'
                    ? 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)'
                    : 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%)',
              }}
            />
          ))}
          {experience.technologies.length > 5 && (
            <Chip
              label={`+${experience.technologies.length - 5}`}
              size="small"
              sx={{ fontSize: '0.75rem', height: 24 }}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
