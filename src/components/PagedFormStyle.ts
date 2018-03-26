import { Theme } from 'material-ui/styles';

export default (theme: Theme) => {
  const height = 32;

  const backgroundColor =
    theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];

  return {
    root: {
      display: "flex",
      justifyContent: "center",
      padding: 50
    },
    profile: {
      display: 'flex',
      alignItems: 'center'
    },
    form: {
      marginLeft: 50,
      maxWidth: 300
    },
    formControl: {
      margin: theme.spacing.unit / 2,
      minWidth: 120
    },
    tag: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor,
      borderRadius: height / 2,
      whiteSpace: 'nowrap',
      outline: 'none',
      border: 'none',
      paddingLeft: 10, // Remove `button` padding
      paddingRight: 10,
      margin: 5,
      minWidth: 50
    },
    buttonBar: {
      display: "flex",
      justifyContent: "space-between"
    }
  };
};