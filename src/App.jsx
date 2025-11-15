import { Outlet } from "react-router-dom"
import MyNavbar from "./components/navbar/Navbar"
import Footer from './components/footer/Footer';
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import PageTitle from "./components/page-title/PageTitle";


const App = () => {
  return (
    <>
      <PageTitle/>
      <MyNavbar/>
      <Outlet />
      <Footer/>
      <ScrollToTop/>
    </>
  )
}

export default App
