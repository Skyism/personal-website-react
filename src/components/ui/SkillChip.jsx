import { Chip } from '@mui/material';

export default function SkillChip({ label, size = 'medium', variant = 'filled' }) {
  return (
    <Chip
      label={label}
      size={size}
      variant={variant}
      sx={{
        fontWeight: 500,
        borderRadius: 1.5,
        background: (theme) =>
          variant === 'filled'
            ? theme.palette.mode === 'light'
              ? 'linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%)'
              : 'linear-gradient(135deg, #4a148c 0%, #6a1b9a 100%)'
            : 'transparent',
        border: variant === 'outlined' ? 1 : 0,
        borderColor: 'primary.main',
        color: variant === 'outlined' ? 'primary.main' : 'text.primary',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: (theme) =>
            theme.palette.mode === 'light'
              ? '0 4px 12px rgba(156, 39, 176, 0.2)'
              : '0 4px 12px rgba(171, 71, 188, 0.3)',
        },
      }}
    />
  );
}
