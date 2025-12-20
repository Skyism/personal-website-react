import { IconButton, Tooltip, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

export default function SocialLinks({ direction = 'row', spacing = 1 }) {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GitHubIcon />,
      url: 'https://github.com/skyism',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon />,
      url: 'https://linkedin.com/in/jshen3',
    },
    {
      name: 'Email',
      icon: <EmailIcon />,
      url: 'mailto:yshenjeffrey@gmail.com',
    },
    {
      name: 'Resume',
      icon: <DescriptionIcon />,
      url: '/assets/documents/Yinchu_Shen_Resume.pdf',
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: direction,
        gap: spacing,
        alignItems: 'center',
      }}
    >
      {socialLinks.map((link) => (
        <Tooltip key={link.name} title={link.name}>
          <IconButton
            component="a"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            sx={{
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-3px)',
                color: 'primary.main',
              },
            }}
          >
            {link.icon}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
}
