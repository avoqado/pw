import { transactionsApi } from "api";
import { Formik } from "formik";
import { profileSelector, setUserInfo } from "modules/profile/profileSlice";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { TransactionFormView } from "./TransactionFormView";
import { addTransactions } from "./transactionSlice";

interface FromValues {
  amount: number;
  name: string;
}

const validationSchema = Yup.object().shape({
  amount: Yup.number().required("Amount is required"),
  name: Yup.string().required("Name is required"),
});

export const TransactionForm: React.FC = () => {
  const profile = useSelector(profileSelector);
  const dispatch = useDispatch();
  const initialValues: FromValues = {
    amount: 100,
    name: "",
  };

  const handleSubmit = (values: FromValues, actions: any) => {
    transactionsApi
      .create(values)
      .then(({ data }: any) => {
        const transaction = data.trans_token;
        const balance = profile.balance + transaction.amount;

        dispatch(addTransactions([transaction]));
        dispatch(setUserInfo({ balance }));
      }) // TODO: add dispatchers
      .catch((error) => actions.setFieldError("amount", error.response.data))
      .finally(() => actions.setSubmitting(false));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      component={TransactionFormView}
    ></Formik>
  );
};
