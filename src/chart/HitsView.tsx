import axios, {AxiosResponse} from "axios";
import * as React from "react";

import {Theme, withStyles, WithStyles} from "@material-ui/core";
import HitsChart from "./HitsChart";
import {HitsData} from "./Types";

interface HitsViewState {
  hits: HitsData | null;
}

const styles = (theme:Theme) => ({
});

class HitsView extends React.Component<{}, HitsViewState> {

  public state = {hits: null};

  public loadData() {
    axios
      .get<HitsData>('credocut.json')
      .then((response) => {
        this.setState({hits: response.data});
      })
  }

  public render() {
    const { hits } = this.state;

    if (hits !== null) {
      return (
        <HitsChart data={hits}/>
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
}

export default withStyles(styles)(HitsView);
