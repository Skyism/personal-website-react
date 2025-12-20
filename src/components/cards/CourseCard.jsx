import { Chip } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingIcon from '@mui/icons-material/Pending';

export default function CourseCard({ courseName, isInProgress = false }) {
  return (
    <Chip
      icon={
        isInProgress ? (
          <PendingIcon sx={{ fontSize: 18 }} />
        ) : (
          <CheckCircleIcon sx={{ fontSize: 18 }} />
        )
      }
      label={courseName}
      variant={isInProgress ? 'outlined' : 'filled'}
      sx={{
        fontSize: '0.875rem',
        fontWeight: 500,
        py: 2.5,
        px: 1,
        height: 'auto',
        borderRadius: 2,
        background: (theme) =>
          !isInProgress
            ? theme.palette.mode === 'light'
              ? 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)'
              : 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%)'
            : 'transparent',
        borderColor: isInProgress ? 'primary.main' : 'transparent',
        color: isInProgress ? 'primary.main' : 'text.primary',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: (theme) =>
            theme.palette.mode === 'light'
              ? '0 4px 12px rgba(156, 39, 176, 0.2)'
              : '0 4px 12px rgba(171, 71, 188, 0.3)',
        },
        '& .MuiChip-icon': {
          color: isInProgress ? 'primary.main' : 'success.main',
        },
      }}
    />
  );
}
