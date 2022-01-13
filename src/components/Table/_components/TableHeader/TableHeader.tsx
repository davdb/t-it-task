import React from 'react';
import { TableHeaders } from 'components/Table/_components/TableHeader/_types/TableHeaders';
import objectUtils from 'utils/objectUtils';

type Props<DataType> = {
  headers: TableHeaders<DataType>;
};

const TableHeader = <DataType,>({ headers }: Props<DataType>) => {
  return (
    <thead className="bg-gray-50">
      <tr>
        {objectUtils(headers)
          .getValuesAsArray()
          .map((header) => {
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
