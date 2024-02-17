import React from 'react';
import Markdown from 'markdown-to-jsx';

const MdRenderer = ({ content }) => {
  const options = {
    overrides: {
      // You can override Markdown elements here if needed
      // For example, to customize the style of headings:
      h1: {
        component: ({ children, ...props }) => <h1 className="text-2xl font-bold my-4" {...props}>{children}</h1>,
      },
      // Custom component for ordered lists
      ol: {
        component: ({ children, ...props }) => <ol className="list-decimal pl-5" {...props}>{children}</ol>,
      },
      // Custom component for unordered lists
      ul: {
        component: ({ children, ...props }) => <ul className="list-disc pl-5" {...props}>{children}</ul>,
      },
      // Custom component for code blocks
      code: {
        component: ({ children, ...props }) => <code className="bg-gray-200 px-2 py-1 rounded" {...props}>{children}</code>,
      },
      // Custom component for inline code
      inlineCode: {
        component: ({ children, ...props }) => <code className="bg-gray-200 px-1 rounded" {...props}>{children}</code>,
      },
      // Custom component for paragraphs
      p: {
        component: ({ children, ...props }) => <p className="text-base my-2" {...props}>{children}</p>,
      },
    },
  };

  return <Markdown options={options}>{content}</Markdown>;
};

export default MdRenderer;
