import { Button, Grid, Link as Mlink, makeStyles } from "@material-ui/core";
import { Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function LoginFormView() {
  const classes = useStyles();

  return (
    <Form className={classes.form} noValidate>
      <Field
        component={TextField}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />

      <Field
        component={TextField}
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign In
      </Button>

      <Grid container>
        <Grid item xs>
          <Mlink component={Link} to="/" variant="body2">
            Go Home
          </Mlink>
        </Grid>
        <Grid item>
          <Mlink component={Link} to="/register" variant="body2">
            Don't have an account? Sign Up
          </Mlink>
        </Grid>
      </Grid>
    </Form>
  );
}
