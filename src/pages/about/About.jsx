import DarkVeil from './components/DarkVeil';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import DeviceHubRoundedIcon from '@mui/icons-material/DeviceHubRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';
import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { stackGroups } from '../../content/portfolio';

const About = () => {
  const { t } = useTranslation();
  const principles = [
    {
      key: 'frontend',
      icon: ViewQuiltRoundedIcon,
      title: t('about.principles.frontend.title'),
      body: t('about.principles.frontend.body'),
    },
    {
      key: 'business',
      icon: DeviceHubRoundedIcon,
      title: t('about.principles.business.title'),
      body: t('about.principles.business.body'),
    },
    {
      key: 'tools',
      icon: BoltRoundedIcon,
      title: t('about.principles.tools.title'),
      body: t('about.principles.tools.body'),
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        px: { xs: 2, md: 4, xl: 6 },
        py: { xs: 10, md: 12 },
      }}
    >
      <DarkVeil speed={3} hueShift={-10} />

      <Box sx={{ position: 'relative', zIndex: 1, color: 'white' }}>
        <Grid container spacing={{ xs: 4, md: 5 }}>
          <Grid size={{ xs: 12, lg: 4 }}>
            <Stack spacing={2.4}>
              <Typography
                variant="overline"
                sx={{ color: 'var(--accent)', letterSpacing: '0.22em', fontWeight: 700 }}
              >
                {t('about.eyebrow')}
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.02,
                  letterSpacing: '-0.05em',
                  fontSize: { xs: '2.2rem', md: '3.5rem' },
                }}
              >
                {t('about.title')}
              </Typography>

              <Typography sx={{ color: 'var(--text-secondary)', lineHeight: 1.85 }}>
                {t('about.intro')}
              </Typography>

              <Stack spacing={1.6}>
                {principles.map((principle) => {
                  const Icon = principle.icon;

                  return (
                    <Paper
                      key={principle.key}
                      elevation={0}
                      sx={{
                        borderRadius: 4,
                        p: 2.2,
                        backgroundColor: 'rgba(7, 10, 18, 0.72)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        backdropFilter: 'blur(18px)',
                      }}
                    >
                      <Stack direction="row" spacing={1.5} alignItems="flex-start">
                        <Box
                          sx={{
                            mt: 0.25,
                            width: 40,
                            height: 40,
                            borderRadius: '14px',
                            display: 'grid',
                            placeItems: 'center',
                            background: 'linear-gradient(135deg, rgba(120, 232, 255, 0.2), rgba(255, 159, 102, 0.18))',
                            border: '1px solid rgba(255,255,255,0.08)',
                          }}
                        >
                          <Icon sx={{ fontSize: 20 }} />
                        </Box>
                        <Stack spacing={0.6}>
                          <Typography sx={{ fontWeight: 700 }}>
                            {principle.title}
                          </Typography>
                          <Typography sx={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.92rem' }}>
                            {principle.body}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Paper>
                  );
                })}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, lg: 8 }}>
            <Stack spacing={2}>
              {stackGroups.map((group) => (
                <Paper
                  key={group.id}
                  elevation={0}
                  sx={{
                    borderRadius: 5,
                    p: { xs: 2.2, md: 2.8 },
                    backgroundColor: 'rgba(8, 13, 22, 0.74)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(22px)',
                  }}
                >
                  <Grid container spacing={2.5} alignItems="center">
                    <Grid size={{ xs: 12, md: 4 }}>
                      <Stack spacing={0.8}>
                        <Typography sx={{ fontWeight: 800, fontSize: '1.05rem' }}>
                          {t(`about.groups.${group.id}.title`)}
                        </Typography>
                        <Typography sx={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.92rem' }}>
                          {t(`about.groups.${group.id}.description`)}
                        </Typography>
                      </Stack>
                    </Grid>

                    <Grid size={{ xs: 12, md: 8 }}>
                      <Stack direction="row" flexWrap="wrap" gap={1.2}>
                        {group.items.map((item) => (
                          <Box
                            key={item.name}
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 1,
                              px: 1.4,
                              py: 1,
                              borderRadius: '999px',
                              backgroundColor: 'rgba(255,255,255,0.05)',
                              border: '1px solid rgba(255,255,255,0.08)',
                            }}
                          >
                            {item.icon ? (
                              <Box
                                component="img"
                                src={item.icon}
                                alt={`${item.name} icon`}
                                sx={{ width: 20, height: 20, objectFit: 'contain' }}
                              />
                            ) : (
                              <Box
                                sx={{
                                  width: 22,
                                  height: 22,
                                  borderRadius: '50%',
                                  display: 'grid',
                                  placeItems: 'center',
                                  backgroundColor: 'rgba(120, 232, 255, 0.16)',
                                  color: 'var(--accent)',
                                  fontSize: '0.62rem',
                                  fontWeight: 700,
                                }}
                              >
                                {item.badge}
                              </Box>
                            )}
                            <Typography sx={{ fontSize: '0.9rem' }}>
                              {item.name}
                            </Typography>
                          </Box>
                        ))}
                      </Stack>
                    </Grid>
                  </Grid>
                </Paper>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
