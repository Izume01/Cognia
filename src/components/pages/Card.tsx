import { useMemo, type FC } from 'react';
import { Book, Video, Link, X, Share, Delete } from 'lucide-react';
import clsx from 'clsx';

type ContentType = 'document' | 'tweets' | 'video' | 'links';

interface CardProps {
  title: string;
  content: string;
  tag: string[];
  date: Date;
  type: ContentType;
}

export const Card: FC<CardProps> = (props) => {
  // Dark-themed pastel colors for tags with better contrast on dark background
  const randomColor = () => {
    const color = [
      'bg-blue-800 text-blue-300',
      'bg-green-800 text-green-300',
      'bg-purple-800 text-purple-300',
      'bg-red-800 text-red-300',
      'bg-yellow-800 text-yellow-300',
      'bg-pink-800 text-pink-300',
      'bg-orange-800 text-orange-300',
      'bg-teal-800 text-teal-300',
      'bg-indigo-800 text-indigo-300',
      'bg-gray-800 text-gray-300',
    ];
    return color[Math.floor(Math.random() * color.length)];
  };

  // Memoize colors for tags to avoid flickering
  const memoizedRandomColor = useMemo(() => {
    return props.tag.map(() => randomColor());
  }, [props.tag]);

  // Icon with lighter colors for dark background
  const getIcon = (type: ContentType) => {
    const baseClass = 'w-6 h-6 text-gray-300';
    switch (type) {
      case 'document':
        return <Book className={baseClass} />;
      case 'tweets':
        return <X className={baseClass} />;
      case 'video':
        return <Video className={baseClass} />;
      case 'links':
        return <Link className={baseClass} />;
      default:
        return <Book className={baseClass} />;
    }
  };

  // Date formatting unchanged
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="p-5 bg-gray-800 rounded-xl max-w-md border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-200">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        {/* Icon */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700">
          {getIcon(props.type)}
        </div>
        {/* Title */}
        <h2 className="flex-1 text-lg font-semibold text-gray-100 px-4 truncate">
          {props.title}
        </h2>
        {/* Actions */}
        <div className="flex gap-3 text-gray-400">
          <button className="hover:text-gray-200 transition-colors" aria-label="Share">
            <Share className="w-5 h-5" />
          </button>
          <button className="text-red-500 hover:text-red-400 transition-colors" aria-label="Delete">
            <Delete className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <p className="text-gray-300 text-sm leading-relaxed line-clamp-4 mb-4">
        {props.content}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {props.tag.map((tag, index) => (
          <span
            key={index}
            className={clsx(
              'px-3 py-1 rounded-full text-xs font-medium select-none',
              memoizedRandomColor[index]
            )}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Dates */}
      <div className="text-xs text-gray-500 select-none">
        Created: {formatDate(props.date)} • Last Updated: {formatDate(new Date())}
      </div>
    </div>
  );
};
