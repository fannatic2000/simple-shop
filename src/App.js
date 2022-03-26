import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './routes';
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {
  showContentMenus = (routes) => {
    const routeList = routes.map((route, index) => (
      <Route key={index} path={route.path} exact={route.exact} component={route.main} />
    ))

    return (
      <Switch>
        {routeList}
      </Switch>
    )
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main id="mainContainer">
            {this.showContentMenus(routes)}
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
