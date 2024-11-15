import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Prose({ children }: Props) {
  return (
    <div
      className="prose w-full lg:prose-xl  h-fit 
                prose-headings:text-gray-900 
                prose-p:text-gray-800 
                prose-li:text-gray-800 
                prose-a:text-blue-600 
                prose-strong:text-black 
                prose-code:bg-gray-100 prose-code:text-red-600 prose-code:font-mono prose-code:rounded prose-code:px-1 prose-code:py-0.5
                dark:prose-headings:text-gray-100 
                dark:prose-p:text-gray-300 
                dark:prose-li:text-gray-300 
                dark:prose-a:text-blue-400 
                dark:prose-strong:text-white
                dark:prose-code:bg-gray-800 dark:prose-code:text-green-400 dark:prose-code:font-mono dark:prose-code:rounded dark:prose-code:px-1 dark:prose-code:py-0.5
                "
    >
      {children}
    </div>
  );
}
