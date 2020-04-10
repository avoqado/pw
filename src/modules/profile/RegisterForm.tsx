import { userApi } from "api";
import { Formik } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { FormView } from "./RegisterFormView";

interface FromValues {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Invalid password confirm")
    .required("Password confirm is required"),
});

export const RegisterForm: React.FC = () => {
  const initialValues: FromValues = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const handleSubmit = (values: FromValues, actions: any) => {
    userApi
      .register(values)
      .then(() => window.location.reload())
      .catch((error) => actions.setFieldError("username", error.response.data))
      .finally(() => actions.setSubmitting(false));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      component={FormView}
    ></Formik>
  );
};
