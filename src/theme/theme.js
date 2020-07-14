// Color: https://material-ui.com/customization/color/#color
import { colorGrade } from './colors/colors';

const defaultPallete = {
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

const produto01Pallete = {
  primary: {
    color: colorGrade.red[0],
    contrastText: colorGrade.white[0],
  },
  secondary: {
    color: colorGrade.white[0],
    contrastText: colorGrade.red[0],
  },
  tertiary: {
    color: colorGrade.black[0],
    contrastText: colorGrade.white[0],
  },
};


const foundationTokens = {
  colors: defaultPallete,
  commons: {
    transition: '.3s ease-in-out',
    buttonBorderRadius: '4px',
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
