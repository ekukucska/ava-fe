import theme from "../../style/theme";

const style = {
  text: {
    color: theme.palette.primary.main,
  },
  primaryButton: {
    backgroundColor: theme.palette.ava_red.main,
    color: theme.palette.ava_yellow.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  secondaryButton: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
};

export default style;
