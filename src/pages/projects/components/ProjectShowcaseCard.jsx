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
  const slides = (project.slides ?? []).filter((slide) => slide?.image);
  const hasSlides = slides.length > 0;
  const activeSlide = hasSlides ? slides[slideIndex] ?? slides[0] : null;
  const isPortraitFrame = activeSlide?.frameVariant === 'portrait';

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
        overflow: 'hidden',
        backgroundColor: 'rgba(8, 13, 22, 0.84)',
        border: `1px solid ${project.accent}33`,
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.24)',
      }}
    >
      <Stack spacing={2.2}>
        {hasSlides && (
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              width: '100%',
              minHeight: { xs: 240, md: 300 },
              aspectRatio: activeSlide?.aspectRatio ?? '16 / 10',
              borderRadius: 4,
              border: `1px solid ${project.accent}55`,
              background: `linear-gradient(135deg, ${project.accent}2f, rgba(10, 15, 25, 0.96))`,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: isPortraitFrame ? { xs: 2, md: 3 } : 0,
                py: isPortraitFrame ? { xs: 2, md: 3 } : 0,
              }}
            >
              <Box
                component="img"
                src={activeSlide.image}
                alt={localize(activeSlide.title, language)}
                sx={{
                  width: isPortraitFrame ? 'auto' : '100%',
                  height: '100%',
                  maxWidth: isPortraitFrame
                    ? activeSlide?.imageMaxWidth ?? { xs: '70%', sm: '58%', md: '46%' }
                    : '100%',
                  objectFit: activeSlide?.imageFit ?? (isPortraitFrame ? 'contain' : 'cover'),
                  objectPosition: activeSlide?.imagePosition ?? 'center',
                  display: 'block',
                  flexShrink: 0,
                }}
              />
            </Box>

            <Stack
              spacing={1}
              justifyContent="flex-end"
              sx={{
                position: 'absolute',
                inset: 0,
                p: 2.2,
                background:
                  'linear-gradient(180deg, rgba(10, 15, 25, 0.08), rgba(10, 15, 25, 0.46) 58%, rgba(10, 15, 25, 0.82))',
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
        )}

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
