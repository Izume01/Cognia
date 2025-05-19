import { MainContent } from '../pages/MainContent'
import { Sidebar } from '../pages/Sidebar'
import { useState } from 'react'
import { Button } from '../ui/button'

export const Home = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);

  return (
    <div>



      <div className="flex flex-row min-h-screen bg-gray-900 text-gray-300">

        {/* Share open */}
        <div>
          {isShareOpen && (
            <div className="fixed inset-0  bg-black/30 backdrop-blur-md p-8 rounded-xl flex items-center justify-center z-50">
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Share Your Space</h2>
                <p className="mb-4">Share your space with others by sending them this link:</p>
                <input
                  type="text"
                  value="https://example.com/share"
                  readOnly
                  className="w-full p-2 bg-gray-800 text-gray-300 rounded-md mb-4"
                />
                <Button onClick={() => setIsShareOpen(false)}>Close</Button>
              </div>
            </div>
          )}
        </div>

        {/* Add open */}
        <div>
          {isAddOpen && (
            <div className="fixed inset-0  bg-black/30 backdrop-blur-md p-8 rounded-xl flex items-center justify-center z-50">
              <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Add New Content</h2>
                <p className="mb-4">Add new content to your space:</p>
                <input
                  type="text"
                  placeholder="Enter content title"
                  className="w-full p-2 bg-gray-800 text-gray-300 rounded-md mb-4"
                />
                <Button onClick={() => setIsAddOpen(false)}>Close</Button>
              </div>
            </div>
          )}
        </div>

        <Sidebar />
        <MainContent ShareOpenHandler={() => setIsShareOpen(true)} AddOpenHandler={() => setIsAddOpen(true) } />
      </div>
    </div>
  )
}
