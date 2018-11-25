import * as React from 'react';
import Plot from 'react-plotly.js';

import {Theme, withStyles, WithStyles} from "@material-ui/core";
import {HitsData} from "./Types";

const styles = (theme:Theme) => ({
  plot: {
    width: '100%'
  }
});

interface HitsChartProps {
  data: HitsData;
}

class HitsChart extends React.Component<HitsChartProps> {
  public render() {
    const {classes:{plot}, data} = this.props as HitsChartProps & WithStyles<typeof styles>;

    return (
      <Plot
        className={plot}
        data={data.plots /*[
          {
            x: data.x,
            y: data.y,
            type: 'scatter',
            mode: 'markers',
            name: 'te'
            //marker: {color: 'red'}
          },
          {
            x: data.x,
            y: data.y,
            type: 'scatter',
            mode: 'markers',
            //marker: {color: 'blue'}
          }
        ]*/}
        layout={
          {
            autosize: true,
            xaxis: {
                type: 'date'
            },
            yaxis: {
              fixedrange: true,
              showticklabels: true,
              ticks: 'outside',
              tick0: 0,
              dtick: 1,
              tickvals: [1],
              ticktext: ['Hit']
            },
            //showlegend: false
          }
        }
        config={ {responsive: true} }
        useResizeHandler={true}
      />
    );
  }
}

export default withStyles(styles)(HitsChart);
