import React from 'react'
import "./App.css"
import {ShoppingContextProvider} from './context/ShoppingContext'
import Home from './pages/Home'
import Shopping from './pages/Shopping'
import {BrowserRouter as Switch, Route} from 'react-router-dom';

function App() {
    return (
        <div>
            <ShoppingContextProvider>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route path="/category/:name" component={Shopping}/>
                </Switch>
            </ShoppingContextProvider>
        </div>
    )
  }
  
  export default App;