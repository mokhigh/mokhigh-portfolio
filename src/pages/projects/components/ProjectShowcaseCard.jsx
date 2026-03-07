import { useState } from 'react';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { Box, Chip, IconButton, Paper, Stack, Typography } from '@mui/material';

const localize = (value, language) => {
  if (Array.isArray(value) || typeof value === 'string') {
    return value;
  }

  if (!value || typeof value !== 'object') {
    return value;
  }

  return value[language] ?? value.en ?? Object.values(value)[0];
};

export default function ProjectShowcaseCard({ project, language }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = project.slides ?? [];
  const activeSlide = slides[slideIndex] ?? {
    title: {
      en: 'Screenshots coming soon',
      es: 'Capturas proximamente',
    },
    hint: {
      en: 'Add project images here when they are ready.',
      es: 'Agrega aqui las imagenes del proyecto cuando esten listas.',
    },
  };

  const handlePrevious = () => {
    setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <Paper
      elevation={0}
      sx={{
        height: '100%',
        borderRadius: 5,
        p: 2,
        backgroundColor: 'rgba(8, 13, 22, 0.84)',
        border: `1px solid ${project.accent}33`,
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.24)',
      }}
    >
      <Stack spacing={2.2}>
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            minHeight: 240,
            borderRadius: 4,
            border: `1px solid ${project.accent}55`,
            background: `linear-gradient(135deg, ${project.accent}2f, rgba(10, 15, 25, 0.96))`,
          }}
        >
          {activeSlide.image ? (
            <Box
              component="img"
              src={activeSlide.image}
              alt={localize(activeSlide.title, language)}
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          ) : (
            <Stack
              spacing={1}
              justifyContent="flex-end"
              sx={{
                position: 'absolute',
                inset: 0,
                p: 2.2,
                background:
                  'linear-gradient(180deg, rgba(10, 15, 25, 0.18), rgba(10, 15, 25, 0.72) 58%, rgba(10, 15, 25, 0.92))',
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.16em', textTransform: 'uppercase' }}
              >
                {project.title}
              </Typography>
              <Typography sx={{ fontWeight: 700, fontSize: '1.2rem', color: 'white' }}>
                {localize(activeSlide.title, language)}
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.76)', lineHeight: 1.7 }}>
                {localize(activeSlide.hint, language)}
              </Typography>
            </Stack>
          )}

          {slides.length > 1 && (
            <>
              <IconButton
                onClick={handlePrevious}
                sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  backgroundColor: 'rgba(8,13,22,0.58)',
                  color: 'white',
                }}
              >
                <ChevronLeftRoundedIcon />
              </IconButton>
              <IconButton
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  backgroundColor: 'rgba(8,13,22,0.58)',
                  color: 'white',
                }}
              >
                <ChevronRightRoundedIcon />
              </IconButton>
              <Stack
                direction="row"
                spacing={0.8}
                sx={{
                  position: 'absolute',
                  bottom: 16,
                  right: 16,
                }}
              >
                {slides.map((item, index) => (
                  <Box
                    key={`${project.id}-${localize(item.title, 'en')}-${index}`}
                    sx={{
                      width: 9,
                      height: 9,
                      borderRadius: '50%',
                      backgroundColor: index === slideIndex ? project.accent : 'rgba(255,255,255,0.28)',
                    }}
                  />
                ))}
              </Stack>
            </>
          )}
        </Box>

        <Stack spacing={1.4}>
          <Stack spacing={0.5}>
            <Typography
              variant="body2"
              sx={{ color: project.accent, letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              {localize(project.category, language)}
            </Typography>
            <Typography sx={{ color: 'white', fontWeight: 800, fontSize: '1.45rem' }}>
              {project.title}
            </Typography>
          </Stack>

          <Typography sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.78 }}>
            {localize(project.description, language)}
          </Typography>

          <Stack spacing={0.9}>
            {localize(project.highlights, language).map((highlight) => (
              <Stack direction="row" spacing={1} alignItems="flex-start" key={`${project.id}-${highlight}`}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    mt: 0.8,
                    flexShrink: 0,
                    backgroundColor: project.accent,
                  }}
                />
                <Typography sx={{ color: 'rgba(255,255,255,0.86)', lineHeight: 1.7 }}>
                  {highlight}
                </Typography>
              </Stack>
            ))}
          </Stack>

          <Stack direction="row" flexWrap="wrap" gap={1}>
            {project.tech.map((tag) => (
              <Chip
                key={`${project.id}-${tag}`}
                label={tag}
                sx={{
                  borderRadius: '999px',
                  color: 'white',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.09)',
                }}
              />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
}
