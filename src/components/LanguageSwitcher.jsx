import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Box, Switch, styled, Avatar } from '@mui/material';

const FLAGS = {
  en: 'https://flagcdn.com/us.svg',
  es: 'https://flagcdn.com/mx.svg',
};

const FlagSwitch = styled(Switch)(() => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 1,
    transform: 'translateX(0px)',
    transition: 'transform 300ms ease',
    '&.Mui-checked': {
      transform: 'translateX(28px)',
      '& + .MuiSwitch-track': {
        backgroundColor: 'transparent',
        border: '1px solid #ccc',
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: 'transparent',
    width: 32,
    height: 32,
    boxShadow: 'none',
    backgroundSize: 'cover',
  },
  '& .MuiSwitch-track': {
    borderRadius: 20,
    backgroundColor: 'transparent',
    border: '1px solid #ccc',
    opacity: 1,
  },
}));

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isSpanish, setIsSpanish] = useState(i18n.language === 'es');

  useEffect(() => {
    setIsSpanish(i18n.language === 'es');
  }, [i18n.language]);

  const handleChange = (event) => {
    const newLang = event.target.checked ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    setIsSpanish(event.target.checked);
  };

  return (
    <Box display="flex" alignItems="center">
      <FlagSwitch
        checked={isSpanish}
        onChange={handleChange}
        disableRipple
        icon={
          <Avatar
            src={FLAGS.en}
            sx={{ width: 32, height: 32 }}
            alt="US Flag"
          />
        }
        checkedIcon={
          <Avatar
            src={FLAGS.es}
            sx={{ width: 32, height: 32 }}
            alt="Mexico Flag"
          />
        }
      />
    </Box>
  );
};
