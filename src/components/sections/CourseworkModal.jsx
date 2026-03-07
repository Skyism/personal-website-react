import { Box, Typography, Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { education } from '../../data/education';

export default function CourseworkModal({ open, onClose }) {
  const allCourses = [
    ...education.allCourses.inProgress,
    ...education.allCourses.completed,
  ];

  // Deduplicate
  const courses = [...new Set(allCourses)];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: '6px',
          boxShadow: (theme) =>
            theme.palette.mode === 'light'
              ? '4px 4px 0 #ccc'
              : '4px 4px 0 #000',
        },
      }}
    >
      {/* Terminal-style title bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 12px',
          borderBottom: '1px solid',
          borderColor: 'divider',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? '#f5f5f5' : '#1a1a1a',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'monospace',
            fontSize: '12px',
            color: 'text.secondary',
          }}
        >
          ~/coursework $ ls -a
        </Typography>
        <IconButton size="small" onClick={onClose} sx={{ padding: '2px' }}>
          <CloseIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
        </IconButton>
      </Box>

      <DialogContent sx={{ padding: '16px' }}>
        <Typography
          sx={{
            fontFamily: 'monospace',
            fontSize: '11px',
            color: 'text.secondary',
            marginBottom: '12px',
          }}
        >
          // {courses.length} courses @ {education.school}
        </Typography>

        <Box
          sx={{
            fontFamily: 'monospace',
            fontSize: '12px',
            lineHeight: 1.8,
            color: 'text.primary',
          }}
        >
          {courses.map((course, idx) => (
            <Box key={idx} sx={{ color: 'text.secondary' }}>
              <Box
                component="span"
                sx={{ color: 'text.secondary', userSelect: 'none' }}
              >
                {idx === courses.length - 1 ? '└─ ' : '├─ '}
              </Box>
              <Box component="span" sx={{ color: 'text.primary' }}>
                {course}
              </Box>
            </Box>
          ))}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
