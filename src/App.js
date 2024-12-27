import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Home from './pages/Home';
import AuthRoute from './component/AuthRoute';
import ContextProvider from './context/counter-context';
import Spinner from './component/Spinner';

function App() {


  return (
    <div className="App">
      <ContextProvider>
      <Router>
        <Routes>
             <Route element={<AuthRoute element={Home} />} path='/' />
        </Routes>
       </Router>
       </ContextProvider>

       <Spinner />
      </div>
  );
}

export default App;
