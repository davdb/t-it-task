import jsonplaceholderService from 'store/services/jsonplaceholderService';
import { CommentsWithTotalCounts } from 'store/reducers/comments/_types/CommentsWithTotalCount';
import { Comment } from 'store/reducers/comments/_types/Comment';

export const commentsApi = jsonplaceholderService.injectEndpoints({
  endpoints(builder) {
    return {
      getComments: builder.query<
        CommentsWithTotalCounts,
        { page: number; limit: number }
      >({
        query: ({ page, limit }) => ({
          url: `/comments?_page=${page}&_limit=${limit}`,
          method: 'get',
        }),
        transformResponse(comments: Comment[], meta: any) {
          return {
            comments: comments,
            totalCount: Number(meta.response.headers.get('X-Total-Count')),
          };
        },
      }),
    };
  },
});

export const { useGetCommentsQuery } = commentsApi;
