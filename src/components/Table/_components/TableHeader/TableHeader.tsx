import React, { FunctionComponent } from 'react';

type Props = {
  headers: string[];
};

const TableHeader: FunctionComponent<Props> = ({ headers }) => {
  return (
    <thead className="bg-gray-50">
      <tr>
        {headers.map((header) => {
          return (
            <th
              key={header}
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {header}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
