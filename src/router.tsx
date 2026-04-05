import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Approach from './pages/Approach';
import WhyUs from './pages/WhyUs';
import Employers from './pages/Employers';
import Talent from './pages/Talent';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services', element: <Services /> },
      { path: 'approach', element: <Approach /> },
      { path: 'why-us', element: <WhyUs /> },
      { path: 'employers', element: <Employers /> },
      { path: 'talent', element: <Talent /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);

export default router;
