import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { Router, browserHistory } from "react-router"
//import routes from './routes';
//import configureStore from './store/configureStore';

class App extends React.Component {
  render(){
    return <h1>asdfj</h1>
  }
}

render(
  <App />,
  document.getElementById("app")
)
