import {HitsData} from "../chart/Types";
import {Datum, PlotDatum} from "plotly.js";
import * as React from "react";
import * as FileSaver from 'file-saver';
import Download from "./Download";
import {Button, Paper, Theme, WithStyles, withStyles} from "@material-ui/core";
import {CloudDownload} from "@material-ui/icons";

interface ExportProps {
  data: HitsData;
}

const styles = (theme:Theme) => ({
  paper: {
    margin: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    [theme.breakpoints.up('sm')]: {
      margin: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
      padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
  },
  button: {
    margin: theme.spacing.unit
  },
  icon: {
    marginLeft: theme.spacing.unit
  },
});

class Export extends React.PureComponent<ExportProps> {

  public render(): React.ReactNode {
    const {classes: {paper, button, icon}} = this.props as ExportProps & WithStyles<typeof styles>;

    return (
      <>
        <Paper className={paper}>
        { this.props.data.plots.map((o, i) => (
          i > 0 && (<Download data={o} id={i} key={i}/>)
        ))}
        </Paper>
        <Paper className={paper}>
          <Button variant="contained" color="secondary" className={button} onClick={this.onDownload}>
            Download all
            <CloudDownload className={icon} />
          </Button>
        </Paper>
      </>
    );
  }

  private onDownload = () => {
    const { data } = this.props;
    const timestamps = [];
    for (let i = 1; i < data.plots.length; i++) {
      // @ts-ignore
      timestamps.push(...data.plots[i].x);
    }
    timestamps.sort();
    const content = timestamps.join('\r\n');

    const blob = new Blob([content], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "timestamps_0.txt")
  }
}

export default withStyles(styles)(Export);
