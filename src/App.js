import './App.css';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import pages from './utils/pages';
import Layout from './layouts/Layout';
import Menu from './pages/Menu';
import Orders from './pages/Orders';
import About from './pages/About';
import Login from './pages/Login';
import Reservations from './pages/Reservations';

const App = () => {
  return (
    <div data-testid="app-component">
      <Layout>
        <Routes>
          <Route path={pages.get('home').path} element={<Home />} />
          <Route path={pages.get('about').path} element={<About />} />
          <Route path={pages.get('menu').path} element={<Menu />} />
          <Route path={pages.get('reservations').path} element={<Reservations />} />
          <Route path={pages.get('orders').path} element={<Orders />} />
          <Route path={pages.get('login').path} element={<Login />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
