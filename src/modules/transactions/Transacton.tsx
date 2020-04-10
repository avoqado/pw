import classes from "*.module.css";
import { Card } from "@material-ui/core";
import React from "react";

export const Transaction: React.FC = () => {
  return (
    <Card className={classes.card} elevation={0}>
      {/* <CardHeader
        title={
          <>
            <Typography variant="subtitle1" display={"inline"}>
            </Typography>
            <Typography
              className={classes.username}
              variant="subtitle1"
              display={"inline"}
              color={"textSecondary"}
            >
            </Typography>
          </>
        }
        subheader={
          <Typography
            variant="caption"
            display={"inline"}
            color={"textSecondary"}
          >
            {unixToDate(createdAt)}
          </Typography>
        }
        action={
          <IconButton onClick={showMenu} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      />

      <CardActions disableSpacing>
        <Button startIcon={<AccountBalanceWallet />} disableRipple>
          {priceWithCurrency(price)}
        </Button>
        <Button
          onClick={showStageMenu}
          startIcon={<Label style={{ color: stage.color }} />}
        >
          {stage.name}
        </Button>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <StageMenu id={id} anchor={stageAnchor} handleClose={hideStageMenu} />
      <DealMenu id={id} anchor={menuAnchor} handleClose={hideMenu} /> */}
    </Card>
  );
};
