import { BrowserRouter , Route , Routes } from "react-router"
import { MainContent } from "./components/pages/MainContent"
import { Sidebar } from "./components/pages/Sidebar"
import { Home } from "./components/layout/Home"
function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<div>
            <Home/>
          </div>}></Route>

          <Route path="/main" element={<MainContent />}></Route>

          <Route path="/sidebar" element={<Sidebar />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App

