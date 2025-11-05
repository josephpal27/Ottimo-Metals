import { Outlet } from "react-router-dom"
import MyNavbar from "./components/navbar/Navbar.jsx"


const App = () => {
  return (
    <>
      <MyNavbar/>
      <Outlet /> {/*Each page will render here*/}
    </>
  )
}

export default App
