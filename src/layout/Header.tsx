import {WithStyles, withStyles} from '@material-ui/core/styles';
import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const styles = {
  root: {
    flexGrow: 1,
  },
};

const Header = ({classes:{root}}:WithStyles<typeof styles>) => {
  return (
    <AppBar className={root} position="static">
      <Toolbar>
        <Typography variant="title" color="inherit">
          CREDO CUT - Brix results
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
