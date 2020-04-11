import { makeStyles, Paper, Toolbar, Typography } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { transactionsApi } from "api";
import { AxiosResponse } from "axios";
import { Transaction as ITransaction } from "modules/transactions/transactionSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTransactions, transactionSelector } from "./transactionSlice";
import { Transaction } from "./Transacton";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
  title: {
    flex: "1 1 100%",
  },
  empty: {
    marginLeft: theme.spacing(2),
  },
  red: {
    color: red[400],
  },
  green: {
    color: green[400],
  },
}));

function TableToolbar() {
  const classes = useStyles();

  return (
    <Toolbar className={classes.root}>
      <Typography className={classes.title} variant="h6" id="tableTitle">
        Transactions history
      </Typography>
    </Toolbar>
  );
}

export function TransactionList() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    const loadTransactions = ({ data }: AxiosResponse) =>
      dispatch(addTransactions(data.trans_token));

    transactionsApi
      .all()
      .then((response) => loadTransactions(response))
      .finally(() => setLoading(false));
  }, [dispatch]);

  return (
    <Paper className={classes.paper} elevation={3}>
      <TableToolbar />
      {isLoading ? <Text content="Loading..." /> : <TransactionTable />}
    </Paper>
  );
}

function TransactionTable() {
  const classes = useStyles();
  const transactions = useSelector(transactionSelector);

  if (!transactions.length) return <Text content="History is empty." />;
  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Correspondent Name</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Balance</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((props: ITransaction) => (
            <Transaction key={props.id} {...props} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

type TextProps = { content: string };
function Text({ content }: TextProps) {
  const classes = useStyles();
  return (
    <Typography variant="subtitle1" className={classes.empty} gutterBottom>
      {content}
    </Typography>
  );
}
