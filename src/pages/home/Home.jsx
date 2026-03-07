import { Box, Button, Chip, Grid, Paper, Stack, Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { GradientText } from '../../components/GradientText/GradientText';
import { SplitText } from '../../components/SplitText';
import HomeMemoji from '../../assets/HomeMemoji.M4V';
import { homeTechGroups } from '../../content/portfolio';

const Home = () => {
  const { t, i18n } = useTranslation();
  const isSmallScreen = useMediaQuery('(max-width:1200px)');
  const highlightTags = t('home.highlightTags', { returnObjects: true });

  return (
    <Box
      sx={{
        minHeight: '100vh',
        px: { xs: 2, md: 4, xl: 6 },
        pt: { xs: 14, md: 18 },
        pb: { xs: 8, md: 10 },
      }}
    >
      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
        <Grid size={{ xs: 12, lg: 7 }}>
          <Stack spacing={3}>
            <SplitText
              key={`welcome-${i18n.language}`}
              text={t('home.welcome')}
              delay={10}
              duration={1.1}
              ease="power3.out"
              splitType="words"
              fontSize="clamp(2.4rem, 7vw, 4.4rem)"
              textAlign="left"
              from={{ opacity: 0, y: 24 }}
              to={{ opacity: 1, y: 0 }}
              rootMargin="-40px"
            />

            <SplitText
              key={`description-${i18n.language}`}
              text={t('home.description')}
              delay={8}
              duration={0.9}
              ease="power3.out"
              splitType="words"
              fontSize="clamp(1.45rem, 3vw, 2.2rem)"
              textAlign="left"
              from={{ opacity: 0, y: 18 }}
              to={{ opacity: 1, y: 0 }}
              rootMargin="-40px"
            />

            <Stack spacing={1.2}>
              <Typography
                variant="body2"
                sx={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.12em', textTransform: 'uppercase' }}
              >
                {t('home.webLabel')}
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {homeTechGroups.web.map((tech) => (
                  <GradientText
                    key={tech.name}
                    colors={tech.colors}
                    animationSpeed={6}
                  >
                    <Typography sx={{ fontWeight: 700, fontSize: { xs: '1.1rem', md: '1.45rem' } }}>
                      {tech.name}
                    </Typography>
                  </GradientText>
                ))}
              </Stack>
            </Stack>

            <Stack spacing={1.2}>
              <Typography
                variant="body2"
                sx={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.12em', textTransform: 'uppercase' }}
              >
                {t('home.mobileLabel')}
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {homeTechGroups.mobile.map((tech) => (
                  <GradientText
                    key={tech.name}
                    colors={tech.colors}
                    animationSpeed={6.5}
                  >
                    <Typography sx={{ fontWeight: 700, fontSize: { xs: '1.1rem', md: '1.45rem' } }}>
                      {tech.name}
                    </Typography>
                  </GradientText>
                ))}
              </Stack>
            </Stack>

            <Typography
              sx={{
                maxWidth: 720,
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                fontSize: { xs: '0.98rem', md: '1.05rem' },
              }}
            >
              {t('home.summary')}
            </Typography>

            <Stack direction="row" flexWrap="wrap" gap={1}>
              {highlightTags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  sx={{
                    borderRadius: '999px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    color: 'white',
                    backdropFilter: 'blur(12px)',
                  }}
                />
              ))}
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              <Button
                href="#projects"
                variant="outlined"
                sx={{
                  width: { xs: '100%', sm: 'fit-content' },
                  px: 2.4,
                  py: 1.4,
                  borderRadius: '999px',
                  textTransform: 'none',
                  color: 'white',
                  fontWeight: 700,
                  borderColor: 'rgba(255,255,255,0.18)',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                }}
              >
                {t('home.primaryCta')}
              </Button>

              <Button
                href="#about"
                variant="outlined"
                sx={{
                  width: { xs: '100%', sm: 'fit-content' },
                  px: 2.4,
                  py: 1.4,
                  borderRadius: '999px',
                  textTransform: 'none',
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.2)',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                }}
              >
                {t('home.secondaryCta')}
              </Button>
            </Stack>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, lg: 5 }}>
          <Box
            sx={{
              position: 'relative',
              maxWidth: 460,
              mx: 'auto',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: '8% 6% auto auto',
                width: 180,
                height: 180,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(120, 232, 255, 0.28), transparent 70%)',
                filter: 'blur(8px)',
              }}
            />

            <Box
              sx={{
                position: 'relative',
                p: { xs: 1, md: 1.25 },
                borderRadius: '32px',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.03))',
                boxShadow: '0 40px 80px rgba(0, 0, 0, 0.35)',
              }}
            >
              <Box
                sx={{
                  borderRadius: '28px',
                  overflow: 'hidden',
                  background: 'linear-gradient(180deg, rgba(8, 13, 22, 0.85), rgba(6, 10, 16, 0.96))',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <video
                  style={{
                    width: isSmallScreen ? '100%' : '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                  src={HomeMemoji}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </Box>
            </Box>

            <Paper
              elevation={0}
              sx={{
                position: { xs: 'relative', md: 'absolute' },
                right: { md: -20 },
                bottom: { md: 18 },
                mt: { xs: 2, md: 0 },
                ml: { xs: 'auto', md: 0 },
                width: { xs: '100%', md: 250 },
                borderRadius: 4,
                p: 2,
                backgroundColor: 'var(--panel-strong)',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(24px)',
              }}
            >
              <Typography sx={{ fontWeight: 700, mb: 0.8 }}>
                {t('home.calloutTitle')}
              </Typography>
              <Typography sx={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.92rem' }}>
                {t('home.calloutBody')}
              </Typography>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
