import { Toaster } from 'react-hot-toast';
import UserMenu from './UserMenu/UserMenu';
import { AuthNavigation } from './AuthNavigation/AuthNavigation'
import Appbar from "./AppBar/AppBar";
import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'
import { Navigation } from "./Navigation/Navigation";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import operations from '../redux/auth/authOperations';
import HomePage from '../pages/HomePage/HomePage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const RegisterForm = lazy(() => import('../pages/RegisterForm/RegisterForm'));
const LoginForm = lazy(() => import('../pages/LoginForm/LoginForm'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <><Appbar>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </Appbar >

      <Suspense fallback={<div>Завантажуємо....</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="contacts" element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>} />
          <Route path="register" element={
            <PublicRoute restricted>
              <RegisterForm />  </PublicRoute>} />
          <Route path="login" element={
            <PublicRoute restricted>
              <LoginForm />
            </PublicRoute>} />
          <Route path="*" element={
            <Navigate to="/" />} />
        </Routes>
      </Suspense>

      <Toaster />
    </>


  );
}

export default App;