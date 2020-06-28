import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import GetFiles from './Endpiont/GetFiles';
import GetOneFile from './Endpiont/GetOneFile';
import Createfile from './Endpiont/Createfile';
import Editfile from './Endpiont/Editfile';
import Deletefile from './Endpiont/Deletefile';
import HomePage from './Home/HomePage';
import Division from './BodyDivision/Division';
import Blog from './Blog/Blog';
import Portfolio from './Portfolio/Portfolio';
import NotFound from './Notfound/NotFound';
import Search from './search/Search';
import Project from './Portfolio/Project';
import Mainport from './Portfolio/Mainport';

function App() {
  return (

      < Router >
        <div className='App'>
          <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/createfile' exact component={Createfile} />
          <Route path='/getfile/:id' exact component={GetOneFile} />
          <Route path='/editfile/:id' exact component={Editfile} />
          <Route path='/deletefile/:id' exact component={Deletefile} />
          {/* <Route path='/homepage' exact component={HomePage} /> */}
          <Route path='/started' exact component={Division} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/portfolio' exact component={Portfolio} />
          <Route path='/create' exact component={Search} />
          <Route path='/project' exact component={Project} />
          <Route path='/main' exact component={Mainport} />
          <Route component={NotFound} />

          </Switch>
        </div>

      </Router >
    
    // <div>
    //   <Createfile />
    // </div>
    
  );
}

export default App;
