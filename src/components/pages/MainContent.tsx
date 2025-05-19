import { Button } from '../ui/button';
import { Card } from './Card';

export const MainContent = ({ ShareOpenHandler, AddOpenHandler}: { ShareOpenHandler: () => void, AddOpenHandler: () => void }) => {


  return (
    <div className="flex-1 min-h-screen overflow-y-auto bg-gray-900 text-gray-300 px-4 sm:px-6 lg:px-8 py-6 space-y-8 relative">
      {/* 👋 Welcome Message */}
      <header className="space-y-1 mt-5">
        <h1 className="text-3xl font-semibold text-white">Welcome back, Sel! 👋</h1>
        <p className="text-gray-400 text-lg">Here are your notes for today. Stay sharp! ⚡</p>
      </header>

      {/* 🔘 Buttons & Heading */}
      <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-semibold text-white">📝 All Notes</h2>

        <div className="flex gap-3">
          <Button
            variant="outline"
            className="bg-gray-800 text-gray-200 border border-gray-700 hover:bg-gray-700 hover:text-white"
            onClick={AddOpenHandler}
          >
            ➕ Add Content
          </Button>
          <Button
            variant="outline"
            className="bg-gray-800 text-gray-200 border border-gray-700 hover:bg-gray-700 hover:text-white"
            onClick={ShareOpenHandler}
          >
            🔗 Share Space
          </Button>
        </div>
      </section>

      {/* 🧠 Note Cards */}
      <section className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <Card
          title="How to beat procrastination"
          content="The best way to beat procrastination is to break tasks into smaller, manageable parts. Start with the easiest part to build momentum. Use tools like the Pomodoro technique to stay focused. Remember, progress is better than perfection!"
          tag={['Productivity', 'Second Brain']}
          date={new Date()}
          type="document"
        />
        <Card
          title="Learn to Focus Deeply"
          content="Deep work leads to massive growth. Cut out distractions, find your flow window, and go all in. The mind becomes sharper the more you challenge it without interruption."
          tag={['Focus', 'Mindset']}
          date={new Date()}
          type="document"
        />
        <Card
          title="Learning React Patterns"
          content="Understanding component composition and state management is critical for building maintainable React applications. Custom hooks can greatly simplify complex logic."
          tag={['React', 'Development']}
          date={new Date()}
          type="document"
        />
        <Card
          title="Top Research Papers 2025"
          content="Collected links to breakthrough research in AI and cognitive science. Several papers on consciousness and large language models worth exploring."
          tag={['Research', 'AI']}
          date={new Date()}
          type="links"
        />
        <Card
          title="Future of Remote Work"
          content="Latest trends showing hybrid models becoming standardized across tech industry. Companies introducing new collaboration tools to bridge distance gaps."
          tag={['Work', 'Future']}
          date={new Date()}
          type="tweets"
        />
        <Card
          title="System Design Basics"
          content="Architecture fundamentals for scaling applications. Key concepts include load balancing, caching strategies, and database partitioning."
          tag={['Tech', 'Architecture']}
          date={new Date()}
          type="video"
        />
        <Card
          title="Morning Routine Ideas"
          content="Starting your day with intention sets the tone. Ideas include meditation, journaling, and exercise before checking any devices or emails."
          tag={['Lifestyle', 'Habits']}
          date={new Date()}
          type="document"
        />
      </section>
    </div>
  );
};

