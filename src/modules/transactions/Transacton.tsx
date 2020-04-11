import {
  IconButton,
  makeStyles,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import { FileCopy } from "@material-ui/icons";
import { Transaction as ITransaction } from "modules/transactions/transactionSlice";
import React from "react";
import { useDispatch } from "react-redux";
import {
  TransactionFormState,
  updateTransactionForm,
} from "./transactionFormSlice";

const useStyles = makeStyles((theme) => ({
  red: {
    color: red[400],
  },
  green: {
    color: green[400],
  },
}));

export function Transaction({
  id,
  amount,
  username,
  balance,
  date,
}: ITransaction) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const copyTemplate = (formState: TransactionFormState) => () =>
    dispatch(updateTransactionForm(formState));

  return (
    <TableRow key={id}>
      <TableCell component="th" scope="row">
        <Typography variant="button">{username}</Typography>
      </TableCell>

      <TableCell
        align="center"
        className={classes[amount >= 0 ? "green" : "red"]}
      >
        <Typography variant="button">{amount}</Typography>
      </TableCell>

      <TableCell align="center">{balance}PW</TableCell>
      <TableCell align="center">{date}</TableCell>

      <TableCell padding="checkbox">
        <IconButton
          aria-label="delete"
          onClick={copyTemplate({ amount: -amount, name: username })}
        >
          <FileCopy />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
