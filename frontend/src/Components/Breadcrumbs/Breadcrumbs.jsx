import React from 'react';

interface BreadcrumbProps {
  pageName: string;
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ pageName }) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-xl font-semibold text-black dark:text-white">
        {pageName}
      </h2>

      <nav className="text-sm">
        <ol className="flex items-center gap-2">
          <li>
            <a href="/" className="font-medium text-primary hover:underline">
              Dashboard
            </a>
          </li>
          <li className="font-medium text-primary">/ {pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
