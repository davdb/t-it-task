import Table from 'components/Table';
import TablePagination from 'components/Table/_components/TablePagination';
import { useAppSelector } from 'store/hooks/useAppSelector';
import { changePage } from 'store/reducers/comments/commentsListSlice';
import { COMMENTS_LIST_TABLE_HEADERS } from 'views/CommentsList/_constants';

const CommentsTable = () => {
  const { comments, page, limit, totalPageCount } = useAppSelector(
    (store) => store.commentsListSlice
  );

  return (
    <>
      <Table headers={COMMENTS_LIST_TABLE_HEADERS} rows={comments} />
      <TablePagination
        page={page}
        limit={limit}
        totalPageCount={totalPageCount}
        changePage={changePage}
      />
    </>
  );
};

export default CommentsTable;
