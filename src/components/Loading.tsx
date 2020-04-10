import { CircularProgress, Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      margin: theme.spacing(3),
    },
  })
);

export const Loading = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      style={{ minHeight: "100vh", maxWidth: "100%" }}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <CircularProgress
        size={60}
        color={"secondary"}
        className={classes.progress}
      />
      {/* <Typography variant='button'>Loaging..</Typography> */}
    </Grid>
  );
};
