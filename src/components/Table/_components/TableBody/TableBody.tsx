import React from 'react';
import TableRow from './_components/TableRow';

type Props<DataType> = {
  data: DataType[];
};

const TableBody = <DataType,>({ data }: Props<DataType>) => (
  <tbody className="bg-white divide-y divide-gray-200">
    {data.map((row, key) => (
      <TableRow row={row} key={key} />
    ))}
  </tbody>
);

export default TableBody;
