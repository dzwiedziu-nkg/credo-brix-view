import {Theme, WithStyles, withStyles} from '@material-ui/core/styles';
import * as React from 'react';

import {Card, CardActionArea, CardMedia} from "@material-ui/core";
import {PlotDatum} from "plotly.js";

const styles = (theme:Theme) => ({
  root: {
    margin: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    [theme.breakpoints.up('sm')]: {
      margin: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
  },
  card: {
    display: 'inline'
  },
  media: {
    height: 120,
    width: 120,
    margin: `${theme.spacing.unit}px`
  }
});


interface HitsImagesProps {
  points: PlotDatum[];
}


const HitsImages = ({classes:{root, card, media}, points}:WithStyles<typeof styles> & HitsImagesProps) => {
  return (
    <div className={root}>
      { points.map((o, i) => (
        // @ts-ignore
        o.data.hit && (
          // @ts-ignore
          <img src={`png/${o.data.hit[o.pointIndex]}.png`} key={i} alt={'s'} className={media}/>
        )
      )) }
    </div>
  );
};

export default withStyles(styles)(HitsImages);
/*
<Card className={card} key={i}>
            { console.log(o)}
            <CardActionArea>
              <CardMedia
                className={media}
                // @ts-ignore
                image={`png/${o.data.hit[o.pointIndex]}.png`}
              />
            </CardActionArea>
          </Card>
 */
