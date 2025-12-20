import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Box,
  Chip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.slug}`);
  };

  return (
    <Card
      sx={{
        height: '100%',
        minHeight: 200,
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
      <CardActionArea onClick={handleClick} sx={{ flexGrow: 1 }}>
        <CardContent sx={{ flexGrow: 1, p: 2 }}>
          <Typography variant="h6" component="h3" gutterBottom fontWeight={600} sx={{ fontSize: '1.1rem' }}>
            {project.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              mb: 1.5,
              fontSize: '0.875rem',
              lineHeight: 1.5,
            }}
          >
            {project.shortDescription}
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1.5 }}>
            {project.tags.slice(0, 2).map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  fontSize: '0.7rem',
                  height: 20,
                  background: (theme) =>
                    theme.palette.mode === 'light'
                      ? 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)'
                      : 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%)',
                }}
              />
            ))}
            {project.tags.length > 2 && (
              <Chip
                label={`+${project.tags.length - 2}`}
                size="small"
                sx={{
                  fontSize: '0.7rem',
                  height: 20,
                }}
              />
            )}
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'primary.main',
              fontWeight: 600,
              transition: 'all 0.3s ease',
            }}
          >
            <Typography variant="caption" fontWeight={600} sx={{ fontSize: '0.75rem' }}>
              View Details
            </Typography>
            <ArrowForwardIcon sx={{ fontSize: 14, ml: 0.5 }} />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
