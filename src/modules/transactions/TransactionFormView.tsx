import {
  Button,
  makeStyles,
  Paper,
  TextField as MTextField,
  Typography,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { Autocomplete } from "@material-ui/lab";
import { userApi } from "api";
import { AxiosResponse } from "axios";
import { Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formSelector, updateTransactionForm } from "./transactionFormSlice";

interface Option {
  id: number;
  name: string;
}

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
    backgroundColor: grey[900],
  },
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

export function TransactionFormView() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const form = useSelector(formSelector);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fillOptions = ({ data }: AxiosResponse) =>
      setOptions(data.map((user) => user.name));

    userApi.all().then((data) => fillOptions(data));
  }, []);

  return (
    <Paper className={classes.paper} elevation={3}>
      <Typography variant="h6">Send PW</Typography>
      <Form className={classes.form}>
        <Autocomplete
          id="combo-box-demo"
          options={options}
          getOptionLabel={(option) => option}
          value={form.name}
          onChange={(event, value) =>
            dispatch(updateTransactionForm({ name: value }))
          }
          renderInput={(params) => (
            <MTextField
              {...params}
              label="Name"
              size="small"
              variant="outlined"
              fullWidth
              required
            />
          )}
        />

        {/* <Field
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
        /> */}
        <Field
          component={TextField}
          variant="outlined"
          margin="normal"
          id="amount"
          label="Amount"
          name="amount"
          autoComplete="amount"
          size="small"
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
