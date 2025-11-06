import { Outlet } from "react-router-dom"
import MyNavbar from "./components/navbar/Navbar"
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <>
      <MyNavbar/>
      <Outlet /> {/*Each page will render here*/}
      <Footer/>
    </>
  )
}

export default App
