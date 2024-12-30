import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Home from './pages/Home';
import AuthRoute from './component/AuthRoute';
import ContextProvider from './context/counter-context';
import Spinner from './component/Spinner';
import ContactForm from './pages/contactForm';
import Message from './pages/Message';

function App() {

  return (
    <div className="App">
      <ContextProvider>
      <Router>
        <Routes>
             <Route element={<AuthRoute element={Home} />} path='/home' />
             <Route element={<ContactForm />} path='/contact' />
             <Route element={<Message />} path='/thread' />
        </Routes>
       </Router>
       </ContextProvider>

       <Spinner />
      </div>
  );
}

export default App;
