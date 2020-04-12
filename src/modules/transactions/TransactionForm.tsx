import { transactionsApi } from "api";
import { AxiosResponse } from "axios";
import { Formik } from "formik";
import { profileSelector, setUserInfo } from "modules/profile/profileSlice";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { formSelector, updateTransactionForm } from "./transactionFormSlice";
import { TransactionFormView } from "./TransactionFormView";
import { addTransactions } from "./transactionSlice";

const validationSchema = (maxAmount: number) =>
  Yup.object().shape({
    amount: Yup.number().max(maxAmount).required("Amount is required"),
    name: Yup.string().required("Name is required"),
  });

export function TransactionForm() {
  const profile = useSelector(profileSelector);
  const formState = useSelector(formSelector);
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    transactionsApi
      .create(values)
      .then(({ data }: AxiosResponse) => {
        const transaction = data.trans_token;
        const balance = profile.balance + transaction.amount;

        dispatch(addTransactions([transaction]));
        dispatch(setUserInfo({ balance }));
        dispatch(updateTransactionForm({ name: "", amount: 0 }));

        actions.resetForm();
      })
      .catch((error) => actions.setFieldError("amount", error.response.data))
      .finally(() => actions.setSubmitting(false));
  };

  return (
    <Formik
      initialValues={formState}
      validationSchema={validationSchema(profile.balance)}
      onSubmit={handleSubmit}
      component={TransactionFormView}
      enableReinitialize
    ></Formik>
  );
}
