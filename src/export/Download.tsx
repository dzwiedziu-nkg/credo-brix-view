import * as React from "react";
import * as FileSaver from 'file-saver';
import {PlotData} from "plotly.js";
import {Button, Theme, withStyles, WithStyles} from "@material-ui/core";
import {CloudDownload} from "@material-ui/icons";

interface DownloadProps {
  data: PlotData;
  id: number;
}

const styles = (theme:Theme) => ({
  button: {
    margin: theme.spacing.unit
  },
  icon: {
    marginLeft: theme.spacing.unit
  },
});


class Download extends React.PureComponent<DownloadProps> {

  public render(): React.ReactNode {
    const { classes: {button, icon}, data: {name} } = this.props as WithStyles<typeof styles> & DownloadProps;

    return (
      <Button variant="contained" color="primary" className={button} onClick={this.onDownload}>
        Download: {name}
        <CloudDownload className={icon} />
      </Button>
    );
  }

  private onDownload = () => {
    const { data, id } = this.props;
    const timestamps:number[] = [];
    // @ts-ignore
    data.x.map((o, i) => timestamps.push(Math.round(o / 1000)));
    const content = timestamps.join('\r\n');

    const blob = new Blob([content], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, `timestamp_${id}.txt`)
  }
}

export default withStyles(styles)(Download);
