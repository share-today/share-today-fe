const colors = {
  black: '#2B2B2B',
  white: '#FFFFFF',
  gray: '#BEBEBE',
  dark_gray: '#979797',
  light_gray: '#EBEBEB',
  blue: '#E0E9FF',
  pink: '#FFE0E0',
  red: '#FF8080',
};

const font = {
  xs: '0.75rem',
  sm: '0.87rem',
  base: '1rem',
  md: '1.12rem',
  lg: '1.25rem',
};

const paddings = {
  xs: '0.75rem',
  sm: '0.87rem',
  base: '1rem',
  md: '1.12rem',
  lg: '1.25rem',
};

const margins = {
  xs: '0.75rem',
  sm: '0.87rem',
  base: '1rem',
  md: '1.12rem',
  lg: '1.25rem',
};

const breakpoints = {
  mobile: 500,
  tablet: 768,
  desktop: 1024,
  wide: 1200,
  xwide: 1440,
};

const media = {
  mobile: `@media (min-width: ${breakpoints.mobile}px)`,
  tablet: `@media (min-width: ${breakpoints.tablet}px)`,
  desktop: `@media (min-width: ${breakpoints.desktop}px)`,
  wide: `@media (min-width: ${breakpoints.wide}px)`,
  xwide: `@media (min-width: ${breakpoints.xwide}px)`,
};

const Theme = {
  colors,
  font,
  breakpoints,
  media,
  paddings,
  margins,
};

export default Theme;
