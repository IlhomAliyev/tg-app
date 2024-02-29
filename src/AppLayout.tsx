import { Outlet } from "react-router-dom"
import { Header } from "./modules/Header/Header"

const AppLayout = () => {

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  )
}

export default AppLayout
