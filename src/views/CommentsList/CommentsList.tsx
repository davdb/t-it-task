import { useAppSelector } from 'store/hooks/useAppSelector';
import { useGetCommentsQuery } from 'store/reducers/comments/commentsApi';
import CommentsTable from './_components/CommentsTable';

const CommentsList = () => {
  const { page, limit } = useAppSelector((store) => store.commentsListSlice);
  const { isLoading, isError } = useGetCommentsQuery(
    { page, limit },
    { refetchOnMountOrArgChange: true }
  );

  if (isLoading) return <h1>'Loading'</h1>;
  if (isError) return <h1>'Error'</h1>;

  return <CommentsTable />;
};

export default CommentsList;
