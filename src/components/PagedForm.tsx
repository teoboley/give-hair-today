import React from 'react';
import { withFormik, FormikProps, FormikErrors } from 'formik';
import Lottie from 'react-lottie';

import { withStyles, StyledComponentProps } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
// import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';

import styles from "./PagedFormStyle";
import * as animationData from '../hair-animation.json';

type Values = {
  groupSize: number;
  packageOptions: PkgOptions;
}

type PkgOptions = {
  hold?: string[];
  volume?: string[];
  texture?: string[];
  curl?: string[];
  smooth?: string[];
  blowdry?: string[];
}

const availableOptions: PkgOptions = {
  hold: [""],
  volume: [],
  texture: [],
  curl: [],
  smooth: [],
  blowdry: []
}

// Our inner form component which receives our form's state and updater methods as props
const InnerForm = withStyles(styles, { withTheme: true })(({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  setValues,
  classes
}: FormikProps<Values> & StyledComponentProps<any>) => {
  return (
    <Paper className={classes.root}>
      <Lottie
          options={{
            loop: true,
            autoplay: true, 
            animationData: animationData
          }}
          height={200}
          width={200}
        />
      <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
        <FormControl className={classes.formControl} error={touched.groupSize && errors.groupSize}>
          <InputLabel htmlFor="groupSize-input">Group Size</InputLabel>
          <Input id="groupSize-input" name="groupSize" value={values.groupSize} onChange={handleChange} onBlur={handleBlur} />
          {touched.groupSize && errors.groupSize ? <FormHelperText>{errors.groupSize}</FormHelperText> : null}
        </FormControl>
        <div>
          {Object.keys(availableOptions).map(option => {
            const availableOptionSelections = availableOptions[option];
            const currentSelection = values.packageOptions[option];
            const selected = currentSelection != null && currentSelection.length > 0;

            return (
              <Paper className={classes.tag}>
              <span
                key={option}
                // onDelete={selected ? () => {
                //   // handle delete
                //   setValues({
                //     ...values,
                //     packageOptions: {
                //       ...values.packageOptions,
                //       [option]: []
                //     }
                //   })
                // } : null}
                onClick={!selected ? () => {
                  // handle click
                  setValues({
                    ...values,
                    packageOptions: {
                      ...values.packageOptions,
                      [option]: ["arbitrary selection"]
                    }
                  });
                } : null}
                
                style={{ backgroundColor: selected ? "red" : null }}
              >
                {option}
              </span>
              </Paper>
            );
          })}
        </div>
      </form>
    </Paper>);
});

export default withFormik<{}, Values>({
  mapPropsToValues: props => ({ groupSize: 0, packageOptions: {} }),
  validate: (values, props) => {
    const errors: FormikErrors<Values> = {};
    if (!values.groupSize) {
      errors.groupSize = 'Required';
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
  },
})(InnerForm);
