// Color: https://material-ui.com/customization/color/#color
import { colorGrade } from './colors/colors';

const defaultColorTheme = {
  primary: {
    color: colorGrade.orange[0],
    contrastText: colorGrade.white[0],
  },
  secondary: {
    color: colorGrade.white[0],
    contrastText: colorGrade.orange[0],
  },
  tertiary: {
    color: colorGrade.black[0],
    contrastText: colorGrade.white[0],
  },
};


const foundationTokens = {
  colors: defaultColorTheme,
  commons: {
    transition: '.3s ease-in-out',
    buttonBorderRadius: '5px',
  },
  spacing: {
    1: '8px',
    2: '16px',
    3: '24px',
    4: '32px',
  },
  // typography { title: { fontSize: '1rem',  }, subtitle: { ... } }
  // grid : ...
  // iconography <Icon name="key" /> { close: '<path />', close: '<path />', }
};


export default foundationTokens;
