import React from 'react';
import Table from '../../../../components/Table';

import { USER_WITH_COMMENTS_TABLE_HEADERS } from './_constants';

import { useAppSelector } from '../../../../store/hooks/useAppSelector';
import { useAppDispatch } from '../../../../store/hooks/useAppDispatch';
import { loadMoreUsers } from '../../../../store/reducers/users/usersWithCommentsSlice';
import { useGetPostByUsersIdsQuery } from '../../../../store/reducers/posts/postsApi';
import { useGetCommentsByPostsIdsQuery } from '../../../../store/reducers/comments/commentsApi';

const UsersWithCommentsTable = () => {
  const dispatch = useAppDispatch();

  const { users, visibleUsers, newUsersIds, newPostsIds } = useAppSelector(
    (state) => state.usersWithCommentsSlice
  );
  const areAllUsersVisible = users.length === visibleUsers.length;

  const { isLoading: isLoadingPosts, isError: isErrorPosts } =
    useGetPostByUsersIdsQuery(
      {
        usersIdsQuery: [...newUsersIds.map((item) => `&userId=${item}`)].join(
          ''
        ),
      },
      {
        skip: newUsersIds.length === 0,
      }
    );

  const { isLoading: isLoadingComments, isError: isErrorComments } =
    useGetCommentsByPostsIdsQuery(
      {
        postsIdsQuery: [...newPostsIds.map((item) => `&postId=${item}`)].join(
          ''
        ),
      },
      {
        skip: newPostsIds.length === 0,
      }
    );

  const handleLoadMoreUsers = () => {
    dispatch(loadMoreUsers());
  };

  if (isErrorComments || isErrorPosts) return 'Error';
  if (isLoadingComments || isLoadingPosts) return 'Loading...';

  return (
    <>
      <Table headers={USER_WITH_COMMENTS_TABLE_HEADERS} data={visibleUsers} />
      {!areAllUsersVisible && (
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-purple-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={handleLoadMoreUsers}
        >
          Load more users
        </button>
      )}
    </>
  );
};

export default UsersWithCommentsTable;
