import logo from './logo.svg';
import './App.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Products from './components/Products/Products';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <Router>
        <Switch>
          
          <div className="App">
            <Route exact path="/" component={Products} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/product/:pId" component={ProductDetail} />
          </div>
          
        </Switch>
      </Router>
    
    
  );
}

export default App;
