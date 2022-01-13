import React from 'react';
import TableRow from 'components/Table/_components/TableBody/_components/TableRow';

type Props<DataType> = {
  rows: DataType[];
};

const TableBody = <DataType,>({ rows }: Props<DataType>) => (
  <tbody className="bg-white divide-y divide-gray-200">
    {rows.map((row, key) => (
      <TableRow row={row} key={key} />
    ))}
  </tbody>
);

export default TableBody;
