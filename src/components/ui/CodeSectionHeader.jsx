import { Box, Typography } from '@mui/material';

export default function CodeSectionHeader({ comment, title, subtitle }) {
  return (
    <Box sx={{ marginBottom: '20px' }}>
      <Typography
        sx={{
          fontFamily: 'monospace',
          fontSize: '13px',
          color: 'text.secondary',
          marginBottom: '4px',
        }}
      >
        {comment}
      </Typography>
      <Typography
        sx={{
          fontFamily: 'monospace',
          fontSize: '20px',
          fontWeight: 'bold',
          color: 'text.primary',
        }}
      >
        {title}
        {subtitle && (
          <Typography
            component="span"
            sx={{
              fontSize: '14px',
              color: 'text.secondary',
              marginLeft: '8px',
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Typography>
    </Box>
  );
}

export function SectionSeparator() {
  return (
    <Box
      component="hr"
      sx={{
        border: 'none',
        borderTop: '1px dashed',
        borderColor: 'divider',
        margin: '32px 0',
      }}
    />
  );
}
