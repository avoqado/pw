import { Box, Link as MLink, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6),
  },
}));

export const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Box mt={5}>
        <Copyright />
      </Box>
    </footer>
  );
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link component={MLink} color="inherit" to="/">
        Parrot Wings
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
