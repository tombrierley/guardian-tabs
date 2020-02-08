import { css } from 'styled-components';
import * as utils from '../styles/utils';

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  grey500: '#585858',
  grey100: '#F4F4F4',
  blue500: '#052962',
};

const fontSizes = {
  xxxxLarge: utils.toRems('72px'),
  xxxLarge: utils.toRems('48px'),
  xxLarge: utils.toRems('32px'),
  xLarge: utils.toRems('24px'),
  large: utils.toRems('20px'),
  medium: utils.toRems('18px'),
  base: utils.toRems('16px'),
  small: utils.toRems('14px'),
  xSmall: utils.toRems('12px'),
  xxSmall: utils.toRems('10px'),
};

const fontWeights = {
  bold: 700,
  semibold: 600,
  medium: 500,
  normal: 400,
};

const main = {
  colors,
  fontSizes,
  fontWeights,
  spacing: {
    xxSmall: '5px',
    xSmall: '10px',
    small: '15px',
    base: '20px',
    medium: '25px',
    midLarge: '30px',
    large: '40px',
    xLarge: '80px',
  },

  base: {
    fontColor: colors.grey500,
    fontSize: '16px',
    fontFamily: "'Open Sans', sans-serif",
    headingFontFamily: "'Montserrat', sans-serif",
    transitionSpeed: '250ms',
  },

  grid: {
    maxWidth: '600px',
    gutter: '30px',
  },

  easing: {
    enter: 'cubic-bezier(0, 0.5, 0.5, 1)',
    exit: 'cubic-bezier(0.5, 0, 0.5, 1)',
    move: 'cubic-bezier(0.5, 0, 0, 1)',
  },

  breakpoints: {
    small: (...args) => css`
      @media (min-width: 600px) {
        ${css(...args)};
      }
    `,
    medium: (...args) => css`
      @media (min-width: 900px) {
        ${css(...args)};
      }
    `,
    large: (...args) => css`
      @media (min-width: 1200px) {
        ${css(...args)};
      }
    `,
  },
};

export default main;
