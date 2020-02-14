import {Platform} from 'react-native';

export default {
  // FONT FAMILY
  FONT_FAMILY: Platform.select({
    android: 'Roboto',
    ios: 'Arial',
  }),
  ARABIC_FONT_FAMILY: Platform.select({
    android: 'Roboto',
    ios: 'Arial',
  }),
  // FONT SIZE
  SIZE_SMALL: 12,
  SIZE_MEDIUM: 14,
  SIZE_LARGE: 16,
  // FONT WEIGHT
  WEIGHT_LIGHT: '200',
  WEIGHT_MEDIUM: '600',
  WEIGHT_HEAVY: '800',
  // COLORS
  PRIMARY_COLOR_LIGHT: '#',
  PRIMARY_COLOR: '#a6ce39',
  PRIMARY_COLOR_DARK: '#8dc53e',
  SECONDARY_COLOR_DARK: '#2d7bc3',
  SECONDARY_COLOR: '#0095da',
  SECONDARY_COLOR_LIGHT: '#6095cd',
  WHITE: '#ffffff',
  LIGHTER: '#afafaf',
  LIGHT: '#707070',
  DEFAULT: '#4b4b4b',
  DARK: '#313131',
  DARKER: '#1b1b1b',
  BLACK: '#000000',
  // OTHER COLORS
  FACEBOOK: '#2d7bc3',
  // SEPARATOR: '#b2b0b0',
};

// FONTS
// GESSTwoMedium Medium
