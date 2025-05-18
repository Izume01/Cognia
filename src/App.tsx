import { BrowserRouter , Route , Routes } from "react-router"
import { Card } from "./components/pages/Card"
function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<div>
            <Card 
              title="How to beat procrastination"
              content="The best way to beat procrastination is to break tasks into smaller, manageable parts. Start with the easiest part to build momentum. Use tools like Pomodoro technique to stay focused. Remember, progress is better than perfection!"
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

