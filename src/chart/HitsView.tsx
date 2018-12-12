import axios, {AxiosResponse} from "axios";
import * as React from "react";

import {Theme, withStyles, WithStyles} from "@material-ui/core";
import HitsChart from "./HitsChart";
import {HitsData} from "./Types";
import {PlotDatum} from "plotly.js";
import HitsImages from "./HitsImages";
import Export from "../export/Export";

interface HitsViewState {
  hits: HitsData | null;
  points: PlotDatum[];
}

const styles = (theme:Theme) => ({
});

class HitsView extends React.Component<{}, HitsViewState> {

  public state = {hits: null, points: []};

  public loadData() {
    axios
      .get<HitsData>('credocut.json')
      .then((response) => {
        this.setState({hits: response.data});
      })
  }

  public render() {
    const { hits, points } = this.state;

    if (hits !== null) {
      return (
        <>
          <HitsChart data={hits} onHover={this.onHover}/>
          <HitsImages points={points}/>
          <Export data={hits}/>
        </>
      );
    } else {
      return (
        <p>Loading...</p>
      )
    }
  }

  public componentDidMount(): void {
    this.loadData();
  }

  private onHover = (points: PlotDatum[]) => {
    this.setState({points});
  }
}

export default withStyles(styles)(HitsView);
