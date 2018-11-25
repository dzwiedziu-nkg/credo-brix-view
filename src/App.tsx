import * as React from 'react';
import './App.css';

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HitsView from "./chart/HitsView";
import {Paper, Typography} from "@material-ui/core";
import Legend from "./layout/Legend";

class App extends React.Component {
  public render() {
    return (
      <>
        <Header/>
        <HitsView/>
        <Legend/>
        <Footer/>
      </>
    );
  }
}

export default App;
