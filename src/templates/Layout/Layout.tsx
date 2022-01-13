import { FunctionComponent } from 'react';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="/">
            <span className="sr-only">Workflow</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </a>
        </div>
        <div className="-mr-2 -my-2">
          <a
            href="/users"
            className="text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Users List
          </a>
          <a
            href="/comments"
            className="ml-4 text-base font-medium text-gray-500 hover:text-gray-900"
          >
            Comments List
          </a>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
