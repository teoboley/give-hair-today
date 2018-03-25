import { Theme } from 'material-ui/styles';

export default (theme: Theme) => ({
  root: {
    maxWidth: 500,
    ...theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
    }),
    display: "flex"
  },
  form: {
    // display: 'flex'
  },
  formControl: {
    margin: theme.spacing.unit/2,
    minWidth: 120,
  },
  tagContainer: {

  },
  tag: {
    margin: theme.spacing.unit,
    
  }
});