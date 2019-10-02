import React from 'react';
import './App.css';
import Read from './components/read';
import Create from './components/create';
import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import{ Switch, Route, BrowserRouter } from 'react-router-dom';


class App extends React.Component {
  
  //To turn function to class add class name and extend app to include React.Component
  //Put the return in a render
  render(){
    return (
      <BrowserRouter> 
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
            
          </Navbar>
            <Switch>
              <Route exact path="/" component={Content}/>
              <Route path="/create" component={Create}/>
              <Route path="/read" component={Read}/>
            </Switch>
        </div>
    </BrowserRouter>
    );
  }
  
}

export default App;
