import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import { Box, Button, Chip, Grid, Paper, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const emailAddress = 'mokhigh@hotmail.com';
const phoneNumber = '+52 667 470 0645';
const phoneHref = 'tel:+526674700645';
const linkedinUrl = 'https://www.linkedin.com/in/daniel-elorreaga-mokay';
const linkedinLabel = 'linkedin.com/in/daniel-elorreaga-mokay';
const locationLabel = 'Culiacan, Sinaloa, Mexico';

const Contact = () => {
  const { t } = useTranslation();
  const fitAreas = t('contact.fit', { returnObjects: true });
  const contactItems = [
    {
      id: 'email',
      label: t('contact.cards.email'),
      value: emailAddress,
      href: `mailto:${emailAddress}`,
      icon: <EmailRoundedIcon sx={{ fontSize: 22 }} />,
    },
    {
      id: 'phone',
      label: t('contact.cards.phone'),
      value: phoneNumber,
      href: phoneHref,
      icon: <PhoneRoundedIcon sx={{ fontSize: 22 }} />,
    },
    {
      id: 'linkedin',
      label: t('contact.cards.linkedin'),
      value: linkedinLabel,
      href: linkedinUrl,
      external: true,
      icon: <LinkedInIcon sx={{ fontSize: 22 }} />,
    },
    {
      id: 'location',
      label: t('contact.cards.location'),
      value: locationLabel,
      icon: <FmdGoodRoundedIcon sx={{ fontSize: 22 }} />,
    },
  ];

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
        <Grid container spacing={{ xs: 4, md: 5 }} alignItems="stretch">
          <Grid size={{ xs: 12, lg: 7 }}>
            <Stack spacing={2.4} sx={{ height: '100%', justifyContent: 'space-between' }}>
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
                    color: 'white',
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
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, lg: 5 }}>
            <Stack spacing={1.4}>
              {contactItems.map((item) => {
                const linkProps = item.href
                  ? {
                    component: 'a',
                    href: item.href,
                    ...(item.external ? { target: '_blank', rel: 'noreferrer' } : {}),
                  }
                  : {};

                return (
                  <Paper
                    key={item.id}
                    elevation={0}
                    {...linkProps}
                    sx={{
                      display: 'block',
                      borderRadius: 4,
                      p: 2,
                      backgroundColor: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      textDecoration: 'none',
                      transition: 'transform 180ms ease, border-color 180ms ease, background-color 180ms ease',
                      '&:hover': item.href
                        ? {
                          transform: 'translateY(-2px)',
                          borderColor: 'rgba(120,232,255,0.34)',
                          backgroundColor: 'rgba(255,255,255,0.06)',
                        }
                        : undefined,
                    }}
                  >
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Box
                        sx={{
                          width: 46,
                          height: 46,
                          borderRadius: 3,
                          display: 'grid',
                          placeItems: 'center',
                          flexShrink: 0,
                          color: 'var(--accent)',
                          backgroundColor: 'rgba(120,232,255,0.12)',
                          border: '1px solid rgba(120,232,255,0.2)',
                        }}
                      >
                        {item.icon}
                      </Box>
                      <Box sx={{ minWidth: 0 }}>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'rgba(255,255,255,0.58)',
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            mb: 0.45,
                          }}
                        >
                          {item.label}
                        </Typography>
                        <Typography
                          sx={{
                            color: 'white',
                            fontWeight: 700,
                            lineHeight: 1.5,
                            overflowWrap: 'anywhere',
                          }}
                        >
                          {item.value}
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                );
              })}

              {/* <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.4} sx={{ pt: 0.6 }}>
                <Button
                  href={`mailto:${emailAddress}`}
                  variant="contained"
                  sx={{
                    flex: 1,
                    px: 2.2,
                    py: 1.4,
                    borderRadius: 4,
                    textTransform: 'none',
                    fontWeight: 700,
                    color: '#041018',
                    background: 'linear-gradient(135deg, #78e8ff, #8ef0cf)',
                    boxShadow: '0 16px 36px rgba(120, 232, 255, 0.22)',
                  }}
                >
                  {t('contact.primaryCta')}
                </Button>
                <Button
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
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
              </Stack> */}
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Contact;
