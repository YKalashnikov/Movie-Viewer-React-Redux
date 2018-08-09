import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "./components/Home"
import Movie from "./components/Movie"
import registerServiceWorker from './registerServiceWorker';
import  store  from "./store/index.js"
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { Provider } from "react-redux";

class App extends React.Component {
    render() {
        return(
      <BrowserRouter>
        <Provider store={store}>
        <Switch>  
          <Route path={'/movie/:id'} component={Movie} />
          <Route path={'/'} component={Home} />
        </Switch>
        </Provider>
    
      </BrowserRouter>
    );
  }
}
ReactDOM.render(
 
        <App />,
    
 document.getElementById('root'));
registerServiceWorker();
