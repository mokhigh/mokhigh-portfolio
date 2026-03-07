import { Box, Button, Chip, Grid, Paper, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const fitAreas = t('contact.fit', { returnObjects: true });

  return (
    <Box
      sx={{
        minHeight: '88vh',
        px: { xs: 2, md: 4, xl: 6 },
        py: { xs: 10, md: 12 },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          borderRadius: 6,
          p: { xs: 2.4, md: 4 },
          background:
            'linear-gradient(135deg, rgba(120, 232, 255, 0.12), rgba(255, 159, 102, 0.08) 35%, rgba(8, 13, 22, 0.92) 75%)',
          border: '1px solid rgba(255,255,255,0.12)',
          backdropFilter: 'blur(24px)',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.35)',
        }}
      >
        <Grid container spacing={{ xs: 4, md: 5 }} alignItems="center">
          <Grid size={{ xs: 12, lg: 7 }}>
            <Stack spacing={2.2}>
              <Typography
                variant="overline"
                sx={{ color: 'var(--accent)', letterSpacing: '0.22em', fontWeight: 700 }}
              >
                {t('contact.eyebrow')}
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  lineHeight: 1.03,
                  letterSpacing: '-0.05em',
                  fontSize: { xs: '2.2rem', md: '3.3rem' },
                }}
              >
                {t('contact.title')}
              </Typography>

              <Typography sx={{ color: 'var(--text-secondary)', lineHeight: 1.85, maxWidth: 720 }}>
                {t('contact.description')}
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1}>
                {fitAreas.map((area) => (
                  <Chip
                    key={area}
                    label={area}
                    sx={{
                      borderRadius: '999px',
                      color: 'white',
                      backgroundColor: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                  />
                ))}
              </Stack>

              <Typography sx={{ color: 'rgba(255,255,255,0.62)', maxWidth: 640 }}>
                {t('contact.note')}
              </Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, lg: 5 }}>
            <Stack spacing={1.4}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 4,
                  p: 2.2,
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Typography sx={{ fontWeight: 700, mb: 0.8 }}>
                  {t('contact.privateTitle')}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.72)', lineHeight: 1.7 }}>
                  {t('contact.privateBody')}
                </Typography>
              </Paper>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.4}>
                <Button
                  href="#home"
                  variant="outlined"
                  sx={{
                    flex: 1,
                    px: 2,
                    py: 1.4,
                    borderRadius: 4,
                    textTransform: 'none',
                    color: 'white',
                    borderColor: 'rgba(255,255,255,0.14)',
                    backgroundColor: 'rgba(255,255,255,0.04)',
                  }}
                >
                  {t('contact.primaryCta')}
                </Button>
                <Button
                  href="#about"
                  variant="outlined"
                  sx={{
                    flex: 1,
                    px: 2,
                    py: 1.4,
                    borderRadius: 4,
                    textTransform: 'none',
                    color: 'white',
                    borderColor: 'rgba(255,255,255,0.14)',
                    backgroundColor: 'rgba(255,255,255,0.04)',
                  }}
                >
                  {t('contact.secondaryCta')}
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Contact;
