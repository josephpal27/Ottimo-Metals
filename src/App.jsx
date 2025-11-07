import { Outlet } from "react-router-dom"
import MyNavbar from "./components/navbar/Navbar"
import Footer from './components/footer/Footer';
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";


const App = () => {
  return (
    <>
      <MyNavbar/>
      <Outlet /> {/*Each page will render here*/}
      <Footer/>
      <ScrollToTop/>
    </>
  )
}

export default App
