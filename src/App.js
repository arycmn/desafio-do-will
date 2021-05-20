import {Switch, Route} from 'react-router-dom'
import './App.css';
import Home from "./Pages/Home";
import Iframe1page from "./Pages/Iframe1page";
import Iframe2page from "./Pages/Iframe2page";

function App() {
  return (
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/iframe1' component={Iframe1page}/>
          <Route path='/iframe2' component={Iframe2page}/>
      </Switch>
  );
}

export default App;
