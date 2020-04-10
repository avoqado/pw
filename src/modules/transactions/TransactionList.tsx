import { makeStyles, Paper, Typography } from "@material-ui/core";
import { transactionsApi } from "api";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TransactionSkeleton } from "./TransactionSkeleton";
import { addTransactions, transactionSelector } from "./transactionSlice";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

export const TransactionList: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    transactionsApi
      .all()
      .then(({ data }) => dispatch(addTransactions(data.trans_token)))
      .finally(() => setLoading(false));
  }, [dispatch]);

  return (
    <Paper className={classes.paper} elevation={3}>
      <Typography variant="h6">Transactions history</Typography>
      {isLoading ? <TransactionSkeleton /> : <List />}
    </Paper>
  );
};

function List() {
  const transactions = useSelector(transactionSelector);

  const EmptyTitle = () => (
    <Typography variant="subtitle1">History is empty.</Typography>
  );

  if (!transactions.length) return <EmptyTitle />;
  return (
    <ul>
      {transactions.map((item: any) => (
        <li key={item.id}>{JSON.stringify(item)}</li>
      ))}
    </ul>
  ); // TODO: desplay list
}
