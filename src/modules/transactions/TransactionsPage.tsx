import { Container } from "@material-ui/core";
import { Header } from "components/Header";
import React from "react";
import { TransactionForm } from "./TransactionForm";
import { TransactionList } from "./TransactionList";

export function TransactionsPage() {
  return (
    <Container fixed>
      <Header />
      <TransactionForm />
      <TransactionList />
    </Container>
  );
}
