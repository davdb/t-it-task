import jsonplaceholderService from '../../services/jsonplaceholderService';
import { Post } from './_types/Post';

export const postsApi = jsonplaceholderService.injectEndpoints({
  endpoints(builder) {
    return {
      getPosts: builder.query<any[], void>({
        query: () => ({
          url: '/posts',
          method: 'get',
        }),
      }),
      getPostByUserId: builder.query<any[], { userId: number }>({
        query: ({ userId }) => ({
          url: `/posts?userId=${userId}`,
          method: 'get',
        }),
      }),
      getPostByUsersIds: builder.query<Post[], { usersIdsQuery: string }>({
        query: ({ usersIdsQuery }) => ({
          url: `/posts?${usersIdsQuery}`,
          method: 'get',
        }),
      }),
    };
  },
});

export const {
  useGetPostsQuery,
  useGetPostByUserIdQuery,
  useGetPostByUsersIdsQuery,
} = postsApi;
