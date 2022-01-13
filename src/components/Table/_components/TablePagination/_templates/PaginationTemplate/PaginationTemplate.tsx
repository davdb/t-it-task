import { FunctionComponent } from 'react';

const PaginationTemplate: FunctionComponent = ({ children }) => (
  <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
    <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
      {children}
    </div>
  </div>
);

export default PaginationTemplate;
