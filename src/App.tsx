import React, { FunctionComponent } from 'react';
import { Routes, Route } from 'react-router-dom';

import UsersList from 'views/UsersList';
import CommentsList from 'views/CommentsList';
import Layout from 'templates/Layout';

const App: FunctionComponent = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<UsersList />}>
          <Route path="users" element={<UsersList />} />
        </Route>
        <Route path="comments" element={<CommentsList />} />
      </Routes>
    </Layout>
  );
};

export default App;
