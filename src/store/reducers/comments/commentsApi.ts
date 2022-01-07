import jsonplaceholderService from '../../services/jsonplaceholderService';
import { Comment } from './_types/Comment';

export const commentsApi = jsonplaceholderService.injectEndpoints({
  endpoints(builder) {
    return {
      getComments: builder.query<Comment[], void>({
        query: () => ({
          url: '/comments',
          method: 'get',
        }),
      }),
      getCommentsByPostsIds: builder.query<
        Comment[],
        { postsIdsQuery: string }
      >({
        query: ({ postsIdsQuery }) => ({
          url: `/comments?${postsIdsQuery}`,
          method: 'get',
        }),
      }),
    };
  },
});

export const { useGetCommentsQuery, useGetCommentsByPostsIdsQuery } =
  commentsApi;
