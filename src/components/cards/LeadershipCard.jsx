import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function LeadershipCard({ leadership }) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: (theme) =>
            theme.palette.mode === 'light'
              ? '0 8px 24px rgba(0, 0, 0, 0.12)'
              : '0 8px 24px rgba(156, 39, 176, 0.2)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
          <Box
            sx={{
              mr: 2,
              p: 1.5,
              borderRadius: 2,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <EmojiEventsIcon sx={{ color: 'white', fontSize: 28 }} />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h5" component="h3" fontWeight={600} gutterBottom>
              {leadership.title}
            </Typography>
            <Typography variant="h6" color="primary.main" gutterBottom>
              {leadership.organization}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <CalendarTodayIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary">
              {leadership.period}
            </Typography>
          </Box>
          {leadership.impact?.teamSize && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <GroupsIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                {leadership.impact.teamSize} members
              </Typography>
            </Box>
          )}
        </Box>

        <Typography variant="body2" color="text.secondary" paragraph>
          {leadership.description}
        </Typography>

        <Typography variant="subtitle2" fontWeight={600} gutterBottom>
          Key Responsibilities:
        </Typography>
        <Box component="ul" sx={{ pl: 2, mb: 2 }}>
          {leadership.responsibilities.slice(0, 3).map((resp, index) => (
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

        <Typography variant="subtitle2" fontWeight={600} gutterBottom>
          Skills Developed:
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {leadership.skills.slice(0, 4).map((skill) => (
            <Chip
              key={skill}
              label={skill}
              size="small"
              variant="outlined"
              sx={{
                fontSize: '0.75rem',
                height: 24,
                borderColor: 'primary.main',
                color: 'primary.main',
              }}
            />
          ))}
          {leadership.skills.length > 4 && (
            <Chip
              label={`+${leadership.skills.length - 4}`}
              size="small"
              variant="outlined"
              sx={{ fontSize: '0.75rem', height: 24 }}
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
}
