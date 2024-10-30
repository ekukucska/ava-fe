import colors from './colors';

const typography = {
  fontFamily: 'Nunito, Roboto, Arial, sans-serif',
  fontSize: 16,
  subtitle1: {
    fontSize: '1.5rem', // 24px
    fontWeight: 400,
    color: colors.primary.main,
  },
  subtitle2: {
    fontSize: '2rem', // 32px
    fontWeight: 400,
    color: colors.primary.main,
  },
  subtitle3: {
    fontSize: '2rem', // 32px
    fontWeight: 400,
    color: colors.secondary.main,
  },
  h1: {
    fontSize: '1.25rem', // 20px
    fontWeight: 400,
    lineHeight: '2rem',
    color: colors.primary.main,
  },
  h2: {
    fontSize: '1.25rem', // 20px
    fontWeight: 400,
    lineHeight: '2rem',
    color: colors.secondary.main,
  },
  h3: {
    fontSize: '0.875rem', // 14px
    fontWeight: 400,
    color: colors.primary.main,
  },
  h4: {
    fontSize: '0.875rem', // 14px
    fontWeight: 400,
    color: colors.secondary.main,
  },
  h5: {
    fontSize: '0.75rem', // 12px
    fontWeight: 400,
    color: colors.secondary.main,
  },
  body1: {
    fontSize: '1rem', // 16px
    fontWeight: 400,
    color: colors.primary.main,
  },
  body2: {
    fontSize: '1rem', // 16px
    fontWeight: 400,
    color: colors.secondary.main,
  },
  caption: {
    fontSize: '0.625rem', // 10px
    fontWeight: 400,
    color: colors.secondary.main,
  },
};

export default typography;
