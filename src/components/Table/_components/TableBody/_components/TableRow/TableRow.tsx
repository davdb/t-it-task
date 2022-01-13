import objectUtils from 'utils/objectUtils';

type Props<DataType> = {
  row: DataType;
};

const TableRow = <DataType,>({ row }: Props<DataType>) => {
  return (
    <tr>
      {objectUtils(row)
        .getKeysAsArray()
        .map((property, key) => (
          <td
            className="px-6 py-4 whitespace-nowrap"
            key={`${property}-${key}`}
          >
            {objectUtils(row[property]).parseToString()}
          </td>
        ))}
    </tr>
  );
};

export default TableRow;
