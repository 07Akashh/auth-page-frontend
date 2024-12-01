import React, { useEffect } from 'react';
import AppRouter from './routes/AppRouter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './store/slices/authSlice';

const App = () => {

  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUser());
    }
  }, [dispatch, status]);

  return (
    <div className="app">
      <AppRouter />
    </div>
  );
};

export default App;
