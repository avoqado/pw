import { jwtDecode, userApi } from "api";
import { Formik } from "formik";
import * as React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { LoginFormView } from "./LoginFormView";
import { setUserInfo } from "./profileSlice";

interface FromValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const LoginForm: React.FC = () => {
  const dispatch = useDispatch();

  const initialValues: FromValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: FromValues, actions) => {
    const updateProfile = (data) => {
      const payload = jwtDecode(data.id_token);
      dispatch(setUserInfo(payload));
    };

    userApi
      .login(values)
      .then((data) => updateProfile(data))
      .catch((error) => {
        actions.setFieldError("password", error.response.data);
        actions.setSubmitting(false);
      });
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
