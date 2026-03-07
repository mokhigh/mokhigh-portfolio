import { Box, Grid, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ProjectShowcaseCard from './components/ProjectShowcaseCard';
import { portfolioProjects } from '../../content/portfolio';

const Projects = () => {
  const { t, i18n } = useTranslation();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        px: { xs: 2, md: 4, xl: 6 },
        py: { xs: 10, md: 12 },
      }}
    >
      <Stack spacing={1.6} sx={{ mb: 4 }}>
        <Typography
          variant="overline"
          sx={{ color: 'var(--accent)', letterSpacing: '0.22em', fontWeight: 700 }}
        >
          {t('projects.eyebrow')}
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: '-0.05em',
            fontSize: { xs: '2.2rem', md: '3.4rem' },
          }}
        >
          {t('projects.title')}
        </Typography>

        <Typography sx={{ color: 'var(--text-secondary)', lineHeight: 1.85, maxWidth: 900 }}>
          {t('projects.intro')}
        </Typography>

        <Typography sx={{ color: 'rgba(255,255,255,0.6)', maxWidth: 900 }}>
          {t('projects.privateNote')}
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {portfolioProjects.map((project) => (
          <Grid size={{ xs: 12, xl: 6 }} key={project.id}>
            <ProjectShowcaseCard project={project} language={i18n.language} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
