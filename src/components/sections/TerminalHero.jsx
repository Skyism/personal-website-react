import { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { personalInfo } from '../../data/personal';
import { projects } from '../../data/projects';

export default function TerminalHero() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const terminalLines = [
    { type: 'command', text: 'jshen@cmu:~$ cat README.md' },
    { type: 'blank' },
    { type: 'output', text: `# ${personalInfo.name}` },
    { type: 'output', text: `${personalInfo.subtitle}` },
    { type: 'blank' },
    { type: 'output', text: '## About' },
    { type: 'output', text: personalInfo.about.split('\n\n')[0] },
    { type: 'blank' },
    { type: 'output', text: `## GPA: ${personalInfo.gpa} | Projects: ${projects.length}+ | Users served: 500+` },
    { type: 'blank' },
    { type: 'command', text: 'jshen@cmu:~$ open ./resume.pdf' },
    { type: 'output', text: '> Opening Yinchu_Shen_Resume.pdf...' },
    { type: 'blank' },
    { type: 'command', text: 'jshen@cmu:~$ ls ./projects/' },
    { type: 'output', text: `csync/  hackcmu-winner/  gmail-agent/  url-shortener/  poker-ai/  +${projects.length - 5} more...` },
    { type: 'blank' },
    { type: 'command', text: 'jshen@cmu:~$', showCursor: true },
  ];

  useEffect(() => {
    if (!isTyping || currentLine >= terminalLines.length) {
      setIsTyping(false);
      return;
    }

    const currentLineData = terminalLines[currentLine];
    if (!currentLineData) {
      setIsTyping(false);
      return;
    }

    if (currentLineData.type === 'blank') {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + '\n');
        setCurrentLine(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }

    let charIndex = 0;
    const fullText = currentLineData.text || '';
    const linePrefix = currentLineData.type === 'command' ? '' : '  ';

    const typeInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        setDisplayedText(prev => {
          const lines = prev.split('\n');
          const lastLine = lines[lines.length - 1] || '';
          lines[lines.length - 1] = linePrefix + fullText.substring(0, charIndex + 1);
          return lines.join('\n');
        });
        charIndex++;
      } else {
        clearInterval(typeInterval);
        const delay = currentLineData.type === 'command' ? 200 : 150;
        setTimeout(() => {
          setDisplayedText(prev => prev + '\n');
          setCurrentLine(prev => prev + 1);
        }, delay);
      }
    }, currentLineData.type === 'command' ? 20 : 15);

    return () => clearInterval(typeInterval);
  }, [currentLine, isTyping]);

  return (
    <Box
      id="about"
      sx={{
        marginBottom: '32px',
      }}
    >
      <Box
        sx={{
          border: '2px solid',
          borderColor: 'text.primary',
          borderRadius: '6px',
          overflow: 'hidden',
          backgroundColor: 'background.paper',
          boxShadow: theme => theme.palette.mode === 'light'
            ? '4px 4px 0 #ccc'
            : '4px 4px 0 #333',
          marginBottom: '16px',
        }}
      >
        {/* Terminal Title Bar */}
        <Box
          sx={{
            backgroundColor: theme => theme.palette.mode === 'light' ? '#ddd' : '#333',
            borderBottom: '1px solid',
            borderColor: theme => theme.palette.mode === 'light' ? '#bbb' : '#555',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
          }}
        >
          <Box
            sx={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: theme => theme.palette.mode === 'light' ? '#bbb' : '#666',
              border: '1px solid',
              borderColor: theme => theme.palette.mode === 'light' ? '#aaa' : '#555',
            }}
          />
          <Box
            sx={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: theme => theme.palette.mode === 'light' ? '#bbb' : '#666',
              border: '1px solid',
              borderColor: theme => theme.palette.mode === 'light' ? '#aaa' : '#555',
            }}
          />
          <Box
            sx={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: theme => theme.palette.mode === 'light' ? '#bbb' : '#666',
              border: '1px solid',
              borderColor: theme => theme.palette.mode === 'light' ? '#aaa' : '#555',
            }}
          />
          <Typography
            sx={{
              fontSize: '11px',
              color: 'text.secondary',
              marginLeft: '8px',
              fontFamily: 'monospace',
            }}
          >
            ~/ jshen.dev — zsh
          </Typography>
        </Box>

        {/* Terminal Body */}
        <Box
          sx={{
            padding: '16px',
            fontFamily: 'monospace',
            fontSize: '12px',
            lineHeight: 1.8,
            minHeight: '400px',
            backgroundColor: theme => theme.palette.mode === 'light' ? '#ffffff' : '#0d0d0d',
            color: theme => theme.palette.mode === 'light' ? '#222' : '#e0e0e0',
            whiteSpace: 'pre-wrap',
          }}
        >
          {displayedText.split('\n').map((line, idx) => {
            if (line.startsWith('jshen@cmu:~$')) {
              return (
                <Box key={idx} sx={{ marginBottom: line === '' ? '6px' : 0 }}>
                  <Typography
                    component="span"
                    sx={{
                      color: theme => theme.palette.mode === 'light' ? '#555' : '#aaa',
                      fontFamily: 'monospace',
                    }}
                  >
                    jshen@cmu:~$
                  </Typography>
                  {line.replace('jshen@cmu:~$', '').trim() && (
                    <Typography
                      component="span"
                      sx={{
                        color: 'text.primary',
                        fontFamily: 'monospace',
                        marginLeft: '8px',
                      }}
                    >
                      {line.replace('jshen@cmu:~$', '').trim()}
                    </Typography>
                  )}
                  {idx === displayedText.split('\n').length - 1 && line.includes('jshen@cmu:~$') && (
                    <Box
                      component="span"
                      sx={{
                        width: '8px',
                        height: '14px',
                        backgroundColor: 'text.primary',
                        display: 'inline-block',
                        marginLeft: '2px',
                        animation: 'blink 1s step-end infinite',
                        '@keyframes blink': {
                          '50%': { opacity: 0 },
                        },
                      }}
                    />
                  )}
                </Box>
              );
            } else if (line.startsWith('#')) {
              return (
                <Box key={idx} sx={{ marginBottom: line === '' ? '6px' : 0 }}>
                  <Typography
                    component="span"
                    sx={{
                      color: 'text.secondary',
                      fontFamily: 'monospace',
                    }}
                  >
                    {line.replace(/^  /, '')}
                  </Typography>
                  {line.includes(personalInfo.name) && (
                    <Typography
                      component="span"
                      sx={{
                        color: 'text.primary',
                        fontWeight: 'bold',
                        fontFamily: 'monospace',
                      }}
                    >
                      {' '}{personalInfo.name}
                    </Typography>
                  )}
                </Box>
              );
            } else if (line.startsWith('>')) {
              return (
                <Box key={idx} sx={{ marginBottom: line === '' ? '6px' : 0 }}>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontFamily: 'monospace',
                      marginLeft: '16px',
                    }}
                  >
                    {line.replace(/^  /, '')}
                  </Typography>
                </Box>
              );
            } else if (line.trim() === '') {
              return <Box key={idx} sx={{ height: '6px' }} />;
            } else {
              return (
                <Box key={idx} sx={{ marginBottom: line === '' ? '6px' : 0 }}>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontFamily: 'monospace',
                      marginLeft: line.startsWith('  ') ? '16px' : '0',
                    }}
                  >
                    {line}
                  </Typography>
                </Box>
              );
            }
          })}
        </Box>
      </Box>

      {/* CTA Buttons */}
      <Box sx={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
        <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
          <Button
            variant="contained"
            sx={{
              padding: '8px 20px',
              border: '2px solid',
              borderColor: 'text.primary',
              backgroundColor: 'text.primary',
              color: 'background.paper',
              borderRadius: '4px',
              fontSize: '12px',
              fontFamily: 'monospace',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: 'text.primary',
                opacity: 0.9,
              },
            }}
          >
            ./view-work.sh
          </Button>
        </ScrollLink>
      </Box>
    </Box>
  );
}
