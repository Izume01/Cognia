import React from 'react';
import { Book, Video, Link, X, Share, Delete } from 'lucide-react';
import { NavLink } from 'react-router';

export const Sidebar = () => {
    return (
        <div className="flex flex-col h-screen w-64  bg-gray-900 text-gray-300 p-5 border-r border-gray-800">
            {/* Logo/Header */}
            <div className="mt-5 mb-10">
                <h1 className="p-2 text-3xl font-bold text-center text-white">
                    Cognia
                </h1>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-2 flex-grow">
                <NavItem to="/main" icon={<Book className="h-5 w-5" />} label="Main" />
                <NavItem to="/videos" icon={<Video className="h-5 w-5" />} label="Videos" />
                <NavItem to="/links" icon={<Link className="h-5 w-5" />} label="Links" />
                <NavItem to="/tweets" icon={<X className="h-5 w-5" />} label="Tweets" />
                <NavItem to="/shared" icon={<Share className="h-5 w-5" />} label="Shared" />
                <NavItem to="/trash" icon={<Delete className="h-5 w-5" />} label="Trash" />
            </nav>

            {/* Footer or Additional Controls */}
            <div className="mt-auto pt-6 border-t border-gray-800 text-xs text-gray-500">
                <p className="text-center">© 2025 Cognia</p>
            </div>
        </div>
    );
};

const NavItem = ({ to, icon, label }: {
    to: string;
    icon: React.ReactNode;
    label: string;
}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 text-sm ${isActive
                    ? 'bg-gray-800 text-white font-semibold'
                    : 'hover:bg-gray-800 text-gray-400 hover:text-white'
                }`
            }
        >
            {icon}
            <span>{label}</span>
        </NavLink>
    );
};
