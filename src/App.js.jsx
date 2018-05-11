import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { Grid } from 'react-bootstrap';
import { NavBar } from './components/navbar.js.jsx';
import { Home } from './components/home.js.jsx';
import WinesPage from './containers/winesPage.js.jsx';
import StoresPage from './containers/storesPage.js.jsx';
import WinePage from './containers/winePage.js.jsx'
import StorePage from './containers/storePage.js.jsx'


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Grid>  {/* Grid aligns the enclosed with the Navbar */}
            <Route exact path="/" component={Home} />
            <Route exact path="/wines" component={WinesPage} />
            <Route exact path="/stores" component={StoresPage} />
            <Route exact path="/wines/:wineId" component={WinePage} />
            <Route exact path="/stores/:storeId" component={StorePage} />
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;
