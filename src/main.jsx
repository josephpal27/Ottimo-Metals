import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // Import custom CSS
import "aos/dist/aos.css"; // Import AOS CSS

import App from './App.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import ZincWires from './pages/ZincWires.jsx';
import ZincAluminiumWires from './pages/ZincAluminiumWires.jsx';
import QualityAssurance from './pages/QualityAssurance.jsx';
import Services from './pages/Services.jsx';
import Applications from './pages/Applications.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import Error from './pages/Error.jsx';

let routers = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    // errorElement: <Error />,
    children: [
      {path: "/", element: <Home />},
      {path: "/about", element: <About />},
      {path: "/zinc-wires", element: <ZincWires />},
      {path: "/zinc-aluminium-wires", element: <ZincAluminiumWires />},
      {path: "/quality-assurance", element: <QualityAssurance />},
      {path: "/services", element: <Services />},
      {path: "/applications", element: <Applications />},
      {path: "/gallery", element: <Gallery />},
      {path: "/contact", element: <Contact />},
      {path: "*", element: <Error />},
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
