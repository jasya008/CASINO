import { Route, Routes } from "react-router-dom"
import { Layouts } from "./components/layout"

import { routes } from "./routes"
import { Home } from "./pages/Home"

import { ModalRegistration } from "./components/Authorisation/ModalRegistration"


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
      <ModalRegistration />
    </div>
  )
}

export default App
