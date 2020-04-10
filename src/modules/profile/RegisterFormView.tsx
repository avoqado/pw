import { Button, Grid, Link as MLink, makeStyles } from "@material-ui/core";
import { Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function FormView() {
  const classes = useStyles();

  return (
    <Form className={classes.form} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field
            component={TextField}
            autoComplete="name"
            name="username"
            variant="outlined"
            id="username"
            label="Name"
            autoFocus
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Field
            component={TextField}
            variant="outlined"
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Field
            component={TextField}
            variant="outlined"
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            required
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <Field
            component={TextField}
            variant="outlined"
            name="passwordConfirm"
            label="Confirm Password"
            type="password"
            id="passwordConfirm"
            autoComplete="current-password"
            required
            fullWidth
          />
        </Grid>
      </Grid>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign Up
      </Button>

      <Grid container justify="flex-end">
        <Grid item>
          <MLink component={Link} to="/login" variant="body2">
            Already have an account? Sign in
          </MLink>
        </Grid>
      </Grid>
    </Form>
  );
}
