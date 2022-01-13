import jsonplaceholderService from 'store/services/jsonplaceholderService';
import { UsersWithTotalCounts } from 'store/reducers/users/_types/UsersWithTotalCount';
import { User } from 'store/reducers/users/_types/User';

export const usersApi = jsonplaceholderService.injectEndpoints({
  endpoints(builder) {
    return {
      getUsers: builder.query<
        UsersWithTotalCounts,
        { page: number; limit: number }
      >({
        query: ({ page, limit }) => ({
          url: `/users?_page=${page}&_limit=${limit}`,
          method: 'get',
        }),
        transformResponse(users: User[], meta: any) {
          return {
            users: users,
            totalCount: Number(meta.response.headers.get('X-Total-Count')),
          };
        },
      }),
    };
  },
});

export const { useGetUsersQuery } = usersApi;
