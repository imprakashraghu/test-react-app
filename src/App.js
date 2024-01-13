import { Routes, Route, Link } from 'react-router-dom'
import Customers from './pages/Customers';
import About from './pages/About';
import Home from './pages/Home';
import Customer from './pages/Customer';
import CreateCustomer from './pages/CreateCustomer';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

// https://codesandbox.io/p/sandbox/sunday-react-7ydnr7?file=%2Fsrc%2FApp.js%3A7%2C26

/**
 * Fetch in React ✅
 * Routing and Navigation ✅
 * Production a react app
 */

export default function App() {
 
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customers' element={<Customers />}>
          <Route path='new' element={<CreateCustomer />} />
          <Route path=':id' element={<Customer />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
