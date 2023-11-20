import { Route, Routes } from "react-router-dom"
import { Layouts } from "./components/layout"
import { routes } from "./routes"
import { Home } from "./pages/Home"
import { ModalRegistration } from "./components/Authorisation/ModalRegistration"
import { InitialModal } from "./components/initialModal"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const setRoutes = () =>
    routes.map(({ id, path, element }) => (
      <Route path={path} element={element} key={id} />
    ))

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Layouts />}>
          <Route index element={<Home />} />
          {setRoutes()}
        </Route>
      </Routes>
      <InitialModal />
      <ModalRegistration />
      <ToastContainer  />
    </div>
  )
}

export default App
