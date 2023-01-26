const colors = {
  gray0: '#F7F8F9',
  gray1: '#E9EBED',
  gray2: '#BDBDBD',
  gray3: '#828282',
  gray4: '#4F4F4F',
  gray5: '#26282B',
  gray6: '#1B1D1F',
  gray7: '#474C51',
  black: '#000000',
  red: 'red',
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
