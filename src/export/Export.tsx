import {HitsData} from "../chart/Types";
import * as React from "react";
import * as FileSaver from 'file-saver';
import Download from "./Download";
import {Button, FormGroup, Paper, Theme, WithStyles, withStyles} from "@material-ui/core";
import {CloudDownload} from "@material-ui/icons";
import Select from "./Select";

interface ExportProps {
  data: HitsData;
}

interface ExportState {
  checked: {[key:string]:boolean}
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

class Export extends React.PureComponent<ExportProps, ExportState> {
  public state = { checked:{} };

  public render(): React.ReactNode {
    const {classes: {paper, button, icon}} = this.props as ExportProps & WithStyles<typeof styles>;
    const {checked} = this.state;

    return (
      <>
        <Paper className={paper}>
        { this.props.data.plots.map((o, i) => (
          i > 0 && (<Download data={o} id={i} key={i}/>)
        ))}
        </Paper>
        <Paper className={paper}>
          <FormGroup row>
            { this.props.data.plots.map((o, i) => (
              i > 0 && (<Select id={i} key={i} name={o.name} onSelect={this.onSelect} checked={!!checked[i]}/>)
            ))}
            <Button variant="contained" color="secondary" className={button} onClick={this.onDownload}>
              Download selected
              <CloudDownload className={icon} />
            </Button>
          </FormGroup>
        </Paper>
      </>
    );
  }

  private onDownload = () => {
    const { data } = this.props;
    const { checked } = this.state;
    const timestamps:number[] = [];
    for (let i = 1; i < data.plots.length; i++) {
      if (checked[i]) {
        // @ts-ignore
        data.plots[i].x.map((o, i) => timestamps.push(Math.round(o / 1000)));
      }
    }
    timestamps.sort();
    const content = timestamps.join('\r\n');

    const blob = new Blob([content], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "timestamp_0.txt")
  };

  private onSelect = (id:number, value:boolean) => {
    const {checked} = this.state;
    this.setState({checked:{...checked, [id]:value}})
  }
}

export default withStyles(styles)(Export);
