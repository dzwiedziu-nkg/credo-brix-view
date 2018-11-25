import {Theme, WithStyles, withStyles} from '@material-ui/core/styles';
import * as React from 'react';

import {Paper} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

const styles = (theme:Theme) => ({
  paper: {
    margin: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    [theme.breakpoints.up('sm')]: {
      margin: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
  },
  text: {
    textAlign: "left" as "left"
  },
});


const Legend = ({classes:{paper, text}}:WithStyles<typeof styles>) => {
  return (
    <Paper className={paper}>
      <Typography className={text} variant="title">
        Help:
      </Typography>
      <Typography className={text} variant="body1">
        Please use <strong>Zoom in</strong> and <strong>Zoom out</strong> in chart's toolbar (right upper corner of chart).
      </Typography>
    </Paper>
  );
};

export default withStyles(styles)(Legend);
