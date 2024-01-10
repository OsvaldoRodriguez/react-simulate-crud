import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import { Home } from './pages/Home';
import { Osvaldo } from './pages/Osvaldo';
import { New } from './pages/New'
import { NoMatch } from './pages/NoMatch';
import './styles/myStyles.css'
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link className='link' to={"/"}> Home</Link>
        <Link className='link' to={"/osvaldo"}> Osvaldo </Link>
        
        {/* <Outlet/> */}
      </nav>

      <Routes>
        <Route exact path='' element={<Home/>}/>
        <Route exact path='osvaldo'  element={<Osvaldo/>}> 
          <Route exact path='new' element={<New/>}> </Route>
        </Route>
        <Route path='*' element={<NoMatch/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
