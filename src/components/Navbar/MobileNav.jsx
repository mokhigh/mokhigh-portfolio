import { useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Box, Drawer, IconButton, Paper, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function MobileNav({
  items,
  activeIndex = 0,
  onClick = () => {},
  trailing = null,
}) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const activeItem = items[activeIndex] ?? items[0];

  const handleItemClick = (item, index) => {
    onClick(item, index);
    setOpen(false);
  };

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          mx: 2,
          mt: 1.5,
          px: 1.5,
          py: 1.2,
          borderRadius: '24px',
          backgroundColor: 'rgba(8, 13, 22, 0.82)',
          border: '1px solid rgba(255,255,255,0.1)',
          backdropFilter: 'blur(18px)',
          boxShadow: '0 18px 40px rgba(0, 0, 0, 0.24)',
        }}
      >
        <Stack direction="row" spacing={1.2} alignItems="center" justifyContent="space-between">
          <Box sx={{ minWidth: 0 }}>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.58)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontSize: '0.68rem',
              }}
            >
              {t('nav.menu')}
            </Typography>
            <Typography
              sx={{
                color: 'white',
                fontWeight: 700,
                lineHeight: 1.2,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {activeItem?.label}
            </Typography>
          </Box>

          <Stack direction="row" spacing={1} alignItems="center" flexShrink={0}>
            {trailing}
            <IconButton
              aria-label="Open navigation menu"
              onClick={() => setOpen(true)}
              sx={{
                width: 44,
                height: 44,
                color: 'white',
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Paper>

      <Drawer
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(4, 7, 13, 0.96)',
            backgroundImage:
              'radial-gradient(circle at top left, rgba(36, 158, 149, 0.16), transparent 32%), radial-gradient(circle at top right, rgba(255, 136, 77, 0.12), transparent 28%), linear-gradient(180deg, rgba(9,17,28,0.98) 0%, rgba(2,3,5,0.98) 100%)',
            color: 'white',
            px: 2,
            pt: 2,
            pb: 3,
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(22px)',
          },
        }}
      >
        <Stack spacing={2.2}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Box>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255,255,255,0.58)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                {t('nav.menu')}
              </Typography>
              <Typography sx={{ fontWeight: 800, fontSize: '1.25rem', color: 'white' }}>
                {activeItem?.label}
              </Typography>
            </Box>

            <IconButton
              aria-label="Close navigation menu"
              onClick={() => setOpen(false)}
              sx={{
                width: 44,
                height: 44,
                color: 'white',
                backgroundColor: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <CloseRoundedIcon />
            </IconButton>
          </Stack>

          <Stack spacing={1}>
            {items.map((item, index) => (
              <Paper
                key={item.href ?? item.label}
                component="button"
                type="button"
                elevation={0}
                onClick={() => handleItemClick(item, index)}
                sx={{
                  width: '100%',
                  px: 2,
                  py: 1.5,
                  borderRadius: 4,
                  textAlign: 'left',
                  cursor: 'pointer',
                  color: 'white',
                  backgroundColor:
                    index === activeIndex ? 'rgba(120,232,255,0.18)' : 'rgba(255,255,255,0.04)',
                  border:
                    index === activeIndex
                      ? '1px solid rgba(120,232,255,0.34)'
                      : '1px solid rgba(255,255,255,0.08)',
                  transition: 'background-color 180ms ease, border-color 180ms ease, transform 180ms ease',
                  '&:active': {
                    transform: 'scale(0.99)',
                  },
                }}
              >
                <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-between">
                  <Typography sx={{ fontWeight: 700, color: 'inherit' }}>{item.label}</Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: index === activeIndex ? 'var(--accent)' : 'rgba(255,255,255,0.48)',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </Typography>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}
