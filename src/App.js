import logo from './logo.svg';
import './App.css';

import "semantic-ui-css/semantic.min.css";

import { Header, Grid, GridColumn, GridRow } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Grid columns={3} divided>
          <GridRow>
            <Header  style={{ color : '#BC3A3A', fontFamily: 'Pangolin, cursive' }}>
              La Balancelle Formation
            </Header>
          </GridRow>

          <GridRow style={{ color : '#BC3A3A', fontFamily: 'Pangolin, cursive' }}>
            <GridColumn>
              <GridRow >Bérénice GUDIN</GridRow>
              <GridRow>06 06 06 06 06</GridRow>
            </GridColumn>
            <GridColumn>
              <GridRow>Bérénice GUDIN</GridRow>
              <GridRow>06 06 06 06 06</GridRow>    </GridColumn>
            <GridColumn>
              <GridRow>Bérénice GUDIN</GridRow>
              <GridRow>06 06 06 06 06</GridRow>
            </GridColumn>
          </GridRow>
        </Grid>
      </header>
    </div>
  );
}

export default App;