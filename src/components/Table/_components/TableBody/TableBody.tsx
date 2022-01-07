import React, { FunctionComponent } from 'react';
import UserWithComments from '../../../../store/reducers/users/_types/UsersWithComments';

const mockedAvatar =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60';

type Props = {
  data: UserWithComments[];
};

const TableBody: FunctionComponent<Props> = ({ data }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map(
        (person) =>
          person.comments &&
          person.comments.map((comment) => (
            <tr key={comment.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={mockedAvatar}
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {person.name}
                    </div>
                    <div className="text-sm text-gray-500">{person.email}</div>
                  </div>
                </div>
              </td>

              <td className="px-6 py-4 whitespace-nowrap">{comment.postId}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {comment.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{comment.name}</div>
                <div className="text-sm text-gray-500">{comment.body}</div>
              </td>
            </tr>
          ))
      )}
    </tbody>
  );
};

export default TableBody;
