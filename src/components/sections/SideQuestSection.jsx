import { Box, Typography } from '@mui/material';

export default function SideQuestSection() {
  const sideQuests = [
    { quest: 'hit masters on tft', progress: 65 },
    { quest: "finish the hierarchy series", progress: 70 }
  ];

  return (
    <Box>
      <Typography
        sx={{
          fontFamily: 'monospace',
          fontSize: '12px',
          color: 'text.secondary',
          marginBottom: '8px',
        }}
      >
        // side_quests[]
      </Typography>
      <Box
        sx={{
          border: '1px dashed',
          borderColor: 'divider',
          borderRadius: '4px',
          padding: '14px',
          backgroundColor: theme => theme.palette.mode === 'light' ? '#fafafa' : '#1a1a1a',
        }}
      >
        {sideQuests.map((item, index) => (
          <Box key={index} sx={{ marginBottom: '10px' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12px',
                color: 'text.secondary',
                marginBottom: '4px',
                fontFamily: 'monospace',
              }}
            >
              <span>&gt;</span>
              <span>{item.quest}</span>
            </Box>
            <Box
              sx={{
                height: '6px',
                backgroundColor: theme => theme.palette.mode === 'light' ? '#ddd' : '#444',
                borderRadius: '2px',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  height: '100%',
                  backgroundColor: 'text.secondary',
                  borderRadius: '2px',
                  width: `${item.progress}%`,
                }}
              />
            </Box>
            <Typography
              sx={{
                fontSize: '10px',
                color: 'text.secondary',
                textAlign: 'right',
                marginTop: '2px',
              }}
            >
              {item.progress}%
            </Typography>
          </Box>
        ))}
        <Typography
          sx={{
            fontSize: '10px',
            color: 'text.secondary',
            marginTop: '10px',
            fontFamily: 'monospace',
          }}
        >
          // more quests loading...
        </Typography>
      </Box>
    </Box>
  );
}

