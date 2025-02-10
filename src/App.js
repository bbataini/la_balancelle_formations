import logo from './Oiseau_1.svg';
import Titre from './Logo_svg.svg';
import './App.css';

import "semantic-ui-css/semantic.min.css";

import { Header, Grid, GridColumn, GridRow, Image, Icon } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', position: 'relative' }}>
        <Image src={Titre} size='massive' />
        <div style={{ position: 'absolute', top: 10, right: 10, textAlign: 'center' }}>
          <img src={logo} className="App-logo" alt="logo" style={{ width: '100px', height: 'auto' }} />
          <p style={{ fontFamily: 'Pangolin', fontSize: '1.2rem', fontWeight: 'bold', color: '#BC3A3A' }}>En construction</p>
        </div>
      </header>
      
      <div className="footer-info" style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '10px 0',
        textAlign: 'center'
      }}>
        <Grid columns={3}>
          <GridRow stretched style={{ color: '#BC3A3A', fontFamily: 'Pangolin, cursive', fontSize: '1.5rem' }}>
            <GridColumn width={5}>
              <GridRow>Bérénice GUDIN</GridRow>
              <GridRow>07 68 63 21 70</GridRow>
            </GridColumn>
            <GridColumn>
              <GridRow><a style={{ color: '#BC3A3A', fontFamily: 'Pangolin, cursive', fontSize: '1.5rem' }}> labalancelleformations@gmail.com</a></GridRow>    
            </GridColumn>
            <GridColumn>
              <GridRow>
                <a style={{ color: '#BC3A3A', fontFamily: 'Pangolin, cursive', fontSize: '1.5rem' }} href="http://www.linkedin.com/in/bérénice-gudin-58aa82252" target="_blank" rel="noopener noreferrer">
                  <Icon name='linkedin' size='big' />
                </a>
                <a style={{ color: '#BC3A3A', fontFamily: 'Pangolin, cursive', fontSize: '1.5rem' }} href="https://www.instagram.com/labalancelleformations/?hl=es-la%C2%A0" target="_blank" rel="noopener noreferrer">
                 <Icon name='instagram' size='big' />
                </a>
              </GridRow>
            </GridColumn>
          </GridRow>
        </Grid>
      </div>
    </div>
  );
}

export default App;
