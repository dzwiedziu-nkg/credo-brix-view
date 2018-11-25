import {Theme, WithStyles, withStyles} from '@material-ui/core/styles';
import * as React from 'react';

import Typography from '@material-ui/core/Typography';

const styles = (theme:Theme) => ({
  root: {
    maxWidth: theme.spacing.unit * 110,
    margin: 'auto',
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
    [theme.breakpoints.up('sm')]: {
      padding: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px`,
    },
  },
  version: {
    marginTop: theme.spacing.unit,
    textAlign: "center" as "center"
  },
});


const Footer = ({classes:{root, version}}:WithStyles<typeof styles>) => {
  return (
    <footer className={root}>
      <Typography className={version}>
        Michał Niedźwiecki, Cracow University of Technology, 2018
      </Typography>
    </footer>
  );
};

export default withStyles(styles)(Footer);
