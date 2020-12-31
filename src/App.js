import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,useRouteMatch,
  useParams
} from "react-router-dom";
import Post from './components/Post';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
    <Provider store={store}>
<Navbar/>
</Provider>
  )
    // <Router>
      
    //     <nav>
    //       <ul>
    //         <Link to='/' style={{margin:2}}>Home</Link>
    //         <Link to='/Post' style={{margin:2}}>Post</Link>
           
    //       </ul>
    //     </nav>
    //     <Switch>
    //       <Route path="/Post"><Post/></Route>
        
    //       <Route to="/"><Home/></Route>
    //     </Switch>
    //     {/* <Switch>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/users">
    //         <Users />
    //       </Route>
    //       <Route path="/">
    //         <Home />
    //       </Route>
    //     </Switch> */}
    // </Router>)
}

export default App;
