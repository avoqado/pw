import {
  Avatar,
  Container,
  CssBaseline,
  makeStyles,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Footer } from "components/Footer";
import React from "react";
import { RegisterForm } from "./RegisterForm";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

export function RegisterPage() {
  const classes = useStyles();

  const Header = () => (
    <>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
    </>
  );

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Header />
        <RegisterForm />
        <Footer />
      </div>
    </Container>
  );
}
