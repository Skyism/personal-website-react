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

export default function ProjectCard({ project, variant = 'midTier' }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${project.slug}`);
  };

  // Configuration for different card variants
  const config = {
    featured: {
      height: 300,
      descriptionLines: 3,
      showTechCount: 6,
      fontSize: { title: '1.1rem', desc: '0.875rem' },
      padding: 2,
      showGradient: true,
      borderWidth: '4px',
      hoverTransform: 'translateY(-6px)',
    },
    midTier: {
      height: 200,
      descriptionLines: 2,
      showTechCount: 3,
      fontSize: { title: '0.95rem', desc: '0.8rem' },
      padding: 1.5,
      showGradient: false,
      borderWidth: '3px',
      hoverTransform: 'translateY(-4px)',
    },
    compact: {
      height: 140,
      descriptionLines: 1,
      showTechCount: 2,
      fontSize: { title: '0.9rem', desc: '0.75rem' },
      padding: 1.25,
      showGradient: false,
      borderWidth: '3px',
      hoverTransform: 'translateY(-4px)',
    },
  };

  const settings = config[variant];

  // Use technologies array if available, fallback to tags
  const techStack = project.technologies || project.tags || [];

  return (
    <Card
      sx={{
        height: settings.height,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        background: settings.showGradient
          ? (theme) =>
              theme.palette.mode === 'light'
                ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)'
                : 'linear-gradient(135deg, rgba(156, 39, 176, 0.1) 0%, rgba(106, 27, 154, 0.1) 100%)'
          : 'background.paper',
        borderLeft: `${settings.borderWidth} solid`,
        borderLeftColor: variant === 'featured' ? 'primary.main' : 'transparent',
        '&:hover': {
          transform: settings.hoverTransform,
          borderLeftColor: 'primary.main',
          boxShadow: (theme) =>
            theme.palette.mode === 'light'
              ? '0 8px 24px rgba(0, 0, 0, 0.12)'
              : '0 8px 24px rgba(156, 39, 176, 0.2)',
        },
      }}
    >
      <CardActionArea
        onClick={handleClick}
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'flex-start',
        }}
      >
        <CardContent
          sx={{
            flexGrow: 1,
            p: settings.padding,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Typography
            variant="h6"
            component="h3"
            fontWeight={600}
            sx={{
              fontSize: settings.fontSize.title,
              mb: 0.75,
            }}
          >
            {project.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: settings.descriptionLines,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              mb: 1,
              fontSize: settings.fontSize.desc,
              lineHeight: 1.4,
            }}
          >
            {project.shortDescription}
          </Typography>

          {/* Tech Stack Chips */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
            {techStack.slice(0, settings.showTechCount).map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                variant="outlined"
                sx={{
                  fontSize: variant === 'featured' ? '0.7rem' : '0.65rem',
                  height: variant === 'featured' ? 20 : 18,
                  borderColor: 'primary.main',
                  color: 'primary.main',
                }}
              />
            ))}
            {techStack.length > settings.showTechCount && (
              <Chip
                label={`+${techStack.length - settings.showTechCount}`}
                size="small"
                variant="outlined"
                sx={{
                  fontSize: '0.65rem',
                  height: 18,
                  borderColor: 'text.secondary',
                  color: 'text.secondary',
                }}
              />
            )}
          </Box>

          {/* View Details Link */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: 'primary.main',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              mt: 'auto',
            }}
          >
            <Typography variant="caption" fontWeight={600} sx={{ fontSize: '0.7rem' }}>
              View Details
            </Typography>
            <ArrowForwardIcon sx={{ fontSize: 12, ml: 0.5 }} />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
