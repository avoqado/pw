import { Button, makeStyles, Paper, Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    backgroundColor: grey[900],
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

export function TransactionFormView() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={3}>
      <Typography variant="h6">Send PW</Typography>
      <Form className={classes.form} noValidate>
        <Field
          component={TextField}
          variant="outlined"
          margin="normal"
          name="name"
          label="Name"
          type="text"
          id="name"
          autoComplete="name"
          required
          fullWidth
        />
        <Field
          component={TextField}
          variant="outlined"
          margin="normal"
          id="amount"
          label="Amount"
          name="amount"
          autoComplete="amount"
          required
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Send
        </Button>
      </Form>
    </Paper>
  );
}
