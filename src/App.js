import './App.css';
import React from 'react'
import NavBar from './components/NavBar'
import News from './components/News';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

const App = (props) => {

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/"><News key='' pageSize={props.pageSize} country="in" category="" /></Route>
        <Route exact path="/business"><News key='business' pageSize={props.pageSize} country="in" category="business" /></Route>
        <Route exact path="/entertainment"><News key='entertainment' pageSize={props.pageSize} country="in" category="entertainment" /></Route>
        <Route exact path="/general"><News key='general' pageSize={props.pageSize} country="in" category="general" /></Route>
        <Route exact path="/health"><News key='health' pageSize={props.pageSize} country="in" category="health" /></Route>
        <Route exact path="/science"><News key='science' pageSize={props.pageSize} country="in" category="science" /></Route>
        <Route exact path="/sports"><News key='sports' pageSize={props.pageSize} country="in" category="sports" /></Route>
        <Route exact path="/technology"><News key='technology' pageSize={props.pageSize} country="in" category="technology" /></Route>
      </Switch>
    </Router >
  )

}
export default App
