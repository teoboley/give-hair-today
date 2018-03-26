import React from 'react';
import { withFormik, FormikProps, FormikErrors } from 'formik';
import Lottie from 'react-lottie';
import Button from 'material-ui/Button';

import { withStyles, StyledComponentProps } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Paper from 'material-ui/Paper';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';


import styles from "./PagedFormStyle";
import * as animationData from '../hair-animation.json';

type Values = {
  groupSize: number;
  packageOptions: PkgOptions;
  halfLife: number;
}

type PkgOptions = {
  [key: string]: string[]
}

const availableOptions: PkgOptions = {
  "light hold": [],
  "strong hold": [],
  "small volume": [],
  "medium volume": [],
  "big volume": [],
  "thick texture": [],
  "dry texture": [],
  "curly": [],
  "extra curly": [],
  "smooth it out": [],
  "red color": [],
  "purple color": [],
  "white color": [],
  "green color": [],
  "grey color": [],
  "borwn color": [],
  "blonde color": []
}

type Props = FormikProps<Values> & StyledComponentProps<any> & { style: any };

type State = {
  currentPage: number;
}

// Our inner form component which receives our form's state and updater methods as props
const InnerForm = withStyles(styles, { withTheme: true })(
  class InnerFormWithPageState extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);

      this.state = {
        currentPage: 0
      };
    }

    render() {
      const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setValues,
        classes,
        style
      } = this.props;

      const { currentPage } = this.state;

      const pages = [
        <FormControl className={classes.formControl} error={touched.groupSize && errors.groupSize}>
          <InputLabel htmlFor="groupSize-input">Group Size</InputLabel>
          <Input id="groupSize-input" name="groupSize" value={values.groupSize} renderValue={value => `${value} packages`} onChange={handleChange} onBlur={handleBlur} />
          {touched.groupSize && errors.groupSize ? <FormHelperText>{errors.groupSize}</FormHelperText> : null}
        </FormControl>,
        <div>
          {Object.keys(availableOptions).map(option => {
            const availableOptionSelections = availableOptions[option];
            const currentSelection = values.packageOptions[option];
            const selected = currentSelection != null && currentSelection.length > 0;
    
            return (
              <div className={classes.tag} key={option}>
                <span onClick={!selected ? () => {
                  // handle click
                  setValues({
                    ...values,
                    packageOptions: {
                      ...values.packageOptions,
                      [option]: ["arbitrary selection"]
                    }
                  });
                } : null} >
                  {option}
                </span>
                {selected ?
                  <button onClick={() => {
                    // handle delete
                    setValues({
                      ...values,
                      packageOptions: {
                        ...values.packageOptions,
                        [option]: []
                      }
                    })
                  }}>x</button>
                  : null}
              </div>
            );
          })}
        </div>,
        <FormControl className={classes.formControl} error={touched.halfLife && errors.halfLife}>
          <InputLabel htmlFor="halfLife-input">Half-Life</InputLabel>
          <Input id="halfLife-input" name="halfLife" value={values.halfLife} renderValue={value => `${value} weeks`} onChange={handleChange} onBlur={handleBlur} />
          {touched.halfLife && errors.halfLife ? <FormHelperText>{errors.halfLife}</FormHelperText> : null}
        </FormControl>,
        <div>
          <h2 className={classes.formHeader}>Checkout & Charity Selection</h2>
          <List component="nav">
          <ListItem button>
            <ListItemText primary="Locks of Love" />
          </ListItem>
          <Divider/>
          <ListItem button>
            <ListItemText primary="Wigs for Kids" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Beautiful Lengths" />
          </ListItem>
        </List>
        </div>
      ];
    
      return (
        <Paper className={classes.root} style={style}>
          {/* <div className={classes.profile}>
            <img src="http://via.placeholder.com/200x200" width={200} height={200} />
          </div> */}
          <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
            { pages[currentPage] }
            <div className={classes.progress}>
              <div className={classes.buttonBar}>
                <Button variant="raised" color="default" disabled={currentPage == 0} onClick={() => {
                  this.setState(prevState => ({ currentPage: prevState.currentPage - 1}));
                }}>
                  Back
                </Button>
                { currentPage < pages.length - 1 ? <Button variant="raised" color="primary" onClick={() => {
                  this.setState(prevState => ({ currentPage: prevState.currentPage + 1}));
                }}>
                  Next
                </Button> : <Button variant="raised" color="primary">Order</Button> }
              </div>
              <Stepper activeStep={currentPage}>
                <Step key={0}>
                  <StepLabel>Order Size</StepLabel>
                </Step>
                <Step key={1}>
                  <StepLabel>Hair Style</StepLabel>
                </Step>
                <Step key={2}>
                  <StepLabel>Effect Duration</StepLabel>
                </Step>
                <Step key={3}>
                  <StepLabel>Charity & Checkout</StepLabel>
                </Step>
              </Stepper>
            </div>
          </form>
        </Paper>
      );
    }
  });

export default withFormik<{}, Values>({
  mapPropsToValues: props => ({ groupSize: 0, packageOptions: {}, halfLife: 0 }),
  validate: (values, props) => {
    const errors: FormikErrors<Values> = {};
    if (!values.groupSize) {
      errors.groupSize = 'Required';
    }

    if (!values.halfLife) {
      errors.halfLife = 'Required';
    }

    return errors;
  },
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */,
    }
  ) => {
    /*
    LoginToMyApp(values).then(
      user => {
        setSubmitting(false);
        // do whatevs...
        // props.updateUser(user)
      },
      errors => {
        setSubmitting(false);
        // Maybe even transform your API's errors into the same shape as Formik's!
        setErrors(transformMyApiErrors(errors));
      }
    );
    */
  }
})(InnerForm);
