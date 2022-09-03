// import ContactForm from "./ContactForm/ContactForm";
// import ContactList from "./ContactList/ContactList";
// import Filter from './Filter/Filter';
// import style from './App.module.css';
// import { useGetContactsQuery } from '../redux/contactsApi';
import { Toaster } from 'react-hot-toast';
// import Loader from "../components/Loader/Loader";
import RegisterForm from '../pages/RegisterForm/RegisterForm';
import LoginForm from '../pages/LoginForm/LoginForm';
import UserMenu from './UserMenu/UserMenu';
import { AuthNavigation } from './AuthNavigation/AuthNavigation'
import Appbar from "./AppBar/AppBar";
import { lazy, Suspense } from 'react';
// import { Navigate } from 'react-router-dom';
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

// import Contacts from "./Contacts/Contacts";
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));



function App() {
  // const { refetch } = useGetContactsQuery();
  // console.log(refetch);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());

  }, [dispatch]);
  // refetch();
  // const { data, isLoading } = useGetContactsQuery();
  // console.log(data, isLoading);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <><Appbar> <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </Appbar >

      <Suspense fallback={<div>Завантажуємо....</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="contacts" element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>} />
          <Route path="register" element={<PublicRoute restricted>
            <RegisterForm />  </PublicRoute>} />
          <Route path="login" element={<PublicRoute restricted>
            <LoginForm />  </PublicRoute>} />

          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </Suspense>
      {/* <div className={style.box}>
        <h1>Phonebook</h1>
        <ContactForm
          data={data}
        />
        <h2>Contacts</h2>
        <Filter
        />
        {isLoading && < Loader />}
        {!isLoading && <ContactList
          data={data}
        />}
        <RegisterForm />
        <LoginForm />
        <UserMenu />

      </div> */}
      <Toaster />
    </>


  );
}

export default App;