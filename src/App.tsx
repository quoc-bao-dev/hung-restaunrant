import { RouterProvider } from "react-router-dom"
import Provider from "./context/Provider"
import router from "./router"

const App = () => {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App