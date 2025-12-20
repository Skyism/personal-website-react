import { Box, Container, Typography, Grid, Paper, Divider } from '@mui/material';
import AnimatedSection from '../ui/AnimatedSection';
import CourseCard from '../cards/CourseCard';
import SkillChip from '../ui/SkillChip';
import SchoolIcon from '@mui/icons-material/School';
import { education, technicalSkills } from '../../data/education';

export default function EducationSection() {
  return (
    <Box id="education" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <Typography
            variant="h2"
            gutterBottom
            textAlign="center"
            sx={{
              mb: 6,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Education
          </Typography>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              mb: 4,
              backgroundColor: 'background.paper',
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
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
                <SchoolIcon sx={{ color: 'white', fontSize: 32 }} />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h4" fontWeight={600} gutterBottom>
                  {education.school}
                </Typography>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  {education.degree}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {education.location} • {education.period}
                </Typography>
              </Box>
              <Box sx={{ textAlign: 'right' }}>
                <Typography variant="h4" color="primary.main" fontWeight={700}>
                  {education.gpa}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  GPA
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" fontWeight={600} gutterBottom>
              Relevant Coursework
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
              {education.relevantCoursework.map((course) => (
                <SkillChip key={course} label={course} variant="filled" />
              ))}
            </Box>
          </Paper>
        </AnimatedSection>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <AnimatedSection delay={0.3}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  height: '100%',
                }}
              >
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Current Courses
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {education.allCourses.inProgress.map((course) => (
                    <CourseCard key={course} courseName={course} isInProgress={true} />
                  ))}
                </Box>
              </Paper>
            </AnimatedSection>
          </Grid>

          <Grid item xs={12} md={6}>
            <AnimatedSection delay={0.4}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  backgroundColor: 'background.paper',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  height: '100%',
                }}
              >
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Completed Courses
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {education.allCourses.completed.slice(0, 6).map((course) => (
                    <CourseCard key={course} courseName={course} isInProgress={false} />
                  ))}
                  {education.allCourses.completed.length > 6 && (
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      +{education.allCourses.completed.length - 6} more courses
                    </Typography>
                  )}
                </Box>
              </Paper>
            </AnimatedSection>
          </Grid>
        </Grid>

        <AnimatedSection delay={0.5}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              mt: 4,
              backgroundColor: 'background.paper',
              borderRadius: 3,
              border: '1px solid',
              borderColor: 'divider',
            }}
          >
            <Typography variant="h5" fontWeight={600} gutterBottom textAlign="center">
              Technical Skills
            </Typography>

            <Grid container spacing={3} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                  Languages
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {technicalSkills.languages.map((skill) => (
                    <SkillChip key={skill} label={skill} size="small" />
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                  Frameworks
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {technicalSkills.frameworks.map((skill) => (
                    <SkillChip key={skill} label={skill} size="small" />
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                  Databases
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {technicalSkills.databases.map((skill) => (
                    <SkillChip key={skill} label={skill} size="small" />
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                  Tools
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {technicalSkills.tools.slice(0, 5).map((skill) => (
                    <SkillChip key={skill} label={skill} size="small" />
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </AnimatedSection>
      </Container>
    </Box>
  );
}
