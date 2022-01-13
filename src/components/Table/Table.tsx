import React from 'react';
import TableTemplate from 'templates/TableTemplate';
import TableHeader, {
  TableHeaders as TableHeadersType,
} from 'components/Table/_components/TableHeader';
import TableBody from 'components/Table/_components/TableBody';

type Props<DataType> = {
  headers: TableHeadersType<DataType>;
  rows: DataType[];
};

const Table = <DataType,>({ headers, rows }: Props<DataType>) => {
  return (
    <TableTemplate>
      <table className="min-w-full divide-y divide-gray-200">
        <TableHeader headers={headers} />
        <TableBody rows={rows} />
      </table>
    </TableTemplate>
  );
};

export default Table;
