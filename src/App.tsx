import { BrowserRouter , Route , Routes } from "react-router"
import { Card } from "./components/pages/Card"
function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<div>
            <Card 
              title="How to Build a Second Brain"
              content="The best way of building a second brain is by capturing your thoughts, organizing ideas with tools like Notion or Obsidian, and making them easily retrievable for future use. This allows you to think more clearly and creatively. 🚀"
              tag={["Productivity", "Second Brain"]}
              date={new Date()}
              type="document"
            />
          </div>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

