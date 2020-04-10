import { userApi } from "api";
import { Formik } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { LoginFormView } from "./LoginFormView";

interface FromValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const LoginForm: React.FC = () => {
  const initialValues: FromValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: FromValues, actions: any) => {
    userApi
      .login(values)
      .then(() => window.location.reload())
      .catch((error) => actions.setFieldError("password", error.response.data))
      .finally(() => actions.setSubmitting(false));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      component={LoginFormView}
    ></Formik>
  );
};
