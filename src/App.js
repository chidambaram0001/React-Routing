import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import PrivateRoutes from './common/privateRoute';
import Login from './pages/login/login';
import Main from './main';
import Home from './pages/home'
function App() {

  return (
   <div className='app'>
    {/* <Router>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/main" element={<Main/>} />
        </Route>
        <Route element={<Login/>} path='/login'/>
      </Routes>
    </Router> */}
    <Main />
   </div>
    
  );
}

export default App;
