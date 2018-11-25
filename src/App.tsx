import * as React from 'react';
import './App.css';

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HitsView from "./chart/HitsView";
import {Paper, Typography} from "@material-ui/core";

class App extends React.Component {
  public render() {
    return (
      <>
        <Header/>
        <HitsView/>
        <Paper>
          <Typography>
            Please use <strong>Pan</strong> and <strong>Zoom</strong> in chart's toolbar (right upper corner of chart).
          </Typography>
        </Paper>
        <Footer/>
      </>
    );
  }
}

export default App;
