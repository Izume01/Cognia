import { MainContent } from '../pages/MainContent'
import { Sidebar } from '../pages/Sidebar'

export const Home = () => {
  return (
    <div>
        <div className="flex flex-row min-h-screen bg-gray-900 text-gray-300">
            <Sidebar />
            <MainContent />
        </div>
    </div>
  )
}
