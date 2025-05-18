type ContentType = 'document' | 'tweets' | 'video' | 'links';

import {Book , Video , Link , X, Share, Delete} from 'lucide-react'
import clsx from 'clsx';
import { useMemo, type FC } from 'react';

interface cardProps {
    title: string,
    content: string,
    tag: string[],
    date: Date,
    type: ContentType
}

export const Card : FC<cardProps> = (props) => {

    const randomColor = () => {
        const color = ['bg-blue-100', 'bg-green-100', 'bg-purple-100', 'bg-red-100', 'bg-yellow-100' , 'bg-pink-100', 'bg-orange-100', 'bg-teal-100', 'bg-indigo-100', 'bg-gray-100'];
        return color[Math.floor(Math.random() * color.length)];
    }

    /*
      *  Memoize the random color for each tag
      *  @param tag : string[]
      @returns : string[]
      @example : memoizedRandomColor(['tag1', 'tag2']) => ['bg-blue-100', 'bg-green-100']
      @note : This is used to generate a random color for each tag
      @note : This is used to prevent the random color from changing on every render
    */
    const memoizedRandomColor = useMemo(() => {
        return props.tag.map(() => randomColor());
    } , [props.tag]);



    const getIcon = (type : ContentType) => {
        switch(type) {
            case 'document':
                return <Book className="w-6 h-6 text-blue-500" />
            case 'tweets':
                return <X className="w-6 h-6 text-blue-500" />
            case 'video':
                return <Video className="w-6 h-6 text-blue-500" />
            case 'links':
                return <Link className="w-6 h-6 text-blue-500" />
            default:
                return <Book className="w-6 h-6 text-blue-500" />
        }
    }

    /*
        Format the date to a readable format
        @param date : Date
        @returns : string
        @example : formatDate(new Date()) => "January 1, 2023"
    */
    const formatDate = (date : Date) => {
        const options : Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    return (
        <div className="p-4 bg-white rounded-xl  space-y-4 max-w-md m-3 border-2 border-gray-200">
            {/* Title */}
            <div className="text-2xl font-bold text-gray-800 flex items-center justify-between">
                {/* icon of the type */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                    {getIcon(props.type)} 
                </div>
                {/* Title of the card */}
                <span className="text-gray-800 font-bold text-xl line-clamp-1">{props.title}</span>  

                {/* Sharing and delete buttons */}
                <div className='flex items-center justify-center'>   
                    <button className="text-gray-500 hover:text-gray-700">
                        <Share className="w-6 h-6 text-blue-700" />
                    </button>
                    <button className="text-gray-500 hover:text-gray-700 ml-2">
                        <Delete className="w-6 h-6 text-red-600" />
                    </button>
                </div>
            </div>

            {/* Contents */}
            <div className="text-gray-700 text-base leading-relaxed line-clamp-4">
                {props.content}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {props.tag.map((tag , index) => {
                    return (
                        <span key={index} className={clsx(memoizedRandomColor[index], "text-sm text-gray-700 px-2 py-1 rounded-full")}>
                            {tag}
                        </span>
                    )
                })}
            </div>

            {/* Dates */}
            <div className="text-sm text-gray-500">
                Created: {formatDate(props.date)} • Last Updated: {formatDate(new Date())}
            </div>
        </div>
    )
}
