import { MainContent } from '../pages/MainContent'
import { Sidebar } from '../pages/Sidebar'
import { useState } from 'react'
import { Button } from '../ui/button'
import { X  , Copy} from 'lucide-react'

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
              <div className="bg-gray-900 py-6 px-10 rounded-lg shadow-lg max-w-md ">
                <div className='flex items-center justify-between mb-4 pb-2 border-b border-gray-700'>
                  <h2 className="text-xl font-semibold">Share Your Space</h2>
                  <X className="cursor-pointer text-gray-500 hover:text-gray-300" size={20} onClick={() => setIsShareOpen(false)} />
                </div>
                <p className="mb-4">Share your space with others by sending them this link.
                  They’ll be able to view everything you’ve added.</p>
                {/* <input
                  type="text"
                  value="https://example.com/share"
                  readOnly
                  className="w-full p-2 bg-gray-800 text-gray-300 rounded-md mb-4"
                /> */}
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md mb-4">
                  <Copy />
                  Copy Link
                </Button>

              </div>
            </div>
          )}
        </div>

        {/* Add open */}
        <div>
          {isAddOpen && (
            <div className="fixed inset-0  bg-black/30 backdrop-blur-md p-8 rounded-xl flex items-center justify-center z-50">
              <div className="bg-gray-900 py-6 px-10 rounded-lg shadow-lg max-w-lg">
                <div className='flex items-center justify-between mb-4 pb-2 border-b border-gray-700'>
                  <h2 className="text-xl font-semibold mb-4">Add New Content</h2>
                  <X className="cursor-pointer text-gray-500 hover:text-gray-300" size={20} onClick={() => setIsAddOpen(false)} />
                </div>
                <p className="mb-4">Add new content to your space:</p>
                <input
                  type="text"
                  placeholder="Enter content title"
                  className="w-full p-2 bg-gray-800 text-gray-300 rounded-md mb-4"
                />

                <textarea
                  placeholder="Enter content description"
                  className="w-full p-2 bg-gray-800 text-gray-300 rounded-md mb-4 border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  style={{ maxHeight: '200px' }}
                ></textarea>

                <input
                  type="text"
                  placeholder="Enter tags (comma separated)"
                  className="w-full p-2 bg-gray-800 text-gray-300 rounded-md mb-4"
                />

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md mb-4">
                  Add Content
                </Button>
              </div>
            </div>
          )}
        </div>

        <Sidebar />
        <MainContent ShareOpenHandler={() => setIsShareOpen(true)} AddOpenHandler={() => setIsAddOpen(true)} />
      </div>
    </div>
  )
}
