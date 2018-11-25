import * as moment from 'moment';
import * as React from 'react';

import {PlotDatum} from "plotly.js";
import Plot from 'react-plotly.js';

import {withStyles, WithStyles} from "@material-ui/core";

import {HitsData} from "./Types";


const styles = () => ({
  plot: {
    width: '100%',
    height: 400
  }
});

interface HitsChartProps {
  data: HitsData;
  showlegend?: boolean;
  onHover: (points: PlotDatum[]) => void;
}

class HitsChart extends React.PureComponent<HitsChartProps> {
  public state = {points: []};

  private plot = React.createRef<Plot>();

  public render() {
    const {classes:{plot}, data, showlegend = true} = this.props as HitsChartProps & WithStyles<typeof styles>;
    const { points } = this.state;

    const today = moment().startOf('hour').add(-4,'hour');
    const tomorrow = moment().startOf('hour').add(-1,'hour');

    return (
      <Plot
        ref={this.plot}
        className={plot}
        data={data.plots}
        layout={
          {
            autosize: true,
            dragmode: 'pan',
            xaxis: {
              type: 'date',
              range: [today.unix() * 1000, tomorrow.unix() * 1000]
            },
            yaxis: {
              fixedrange: true,
              showticklabels: true,
              ticks: 'outside',
              tick0: 0,
              dtick: 1,
              tickvals: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              ticktext: ['Hit']
            },
            margin: {
              l: 0,
              r: 0,
              t: 24,
              b: 10
            },
            showlegend,
            legend: {
              orientation: 'h'
            }
          }
        }
        config={{
          responsive: true,
          scrollZoom: true,
          displayModeBar: true
        }}
        useResizeHandler={true}
        onHover={this.onHover}
        onClick={this.onHover}
      />
    );
  }

  private onHover = (event: Readonly<Plotly.PlotMouseEvent>) => {
    this.props.onHover(event.points);
  };
}

export default withStyles(styles)(HitsChart);
