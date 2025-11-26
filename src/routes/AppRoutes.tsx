import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AuthLayout from '@layouts/auth-layout/AuthLayout';
import MainLayout from '@layouts/main-layout/MainLayout';

const Register = lazy(() => import('@features/auth/pages/register/Register'));
const Login = lazy(() => import('@features/auth/pages/login/Login'));
const ForgetPassword = lazy(() => import('@features/auth/pages/forget-password/ForgetPassword'));

const Cart = lazy(() => import('@features/cart/pages/cart/Cart'));
const Checkout = lazy(() => import('@features/cart/pages/checkout/Checkout'));

const ProductList = lazy(() => import('@features/products/pages/product-list/ProductList'));
const ProductDetails = lazy(() => import('@features/products/pages/product-details/ProductDetails'));

const Home = lazy(() => import('@features/home/Home'));
const ContactUs = lazy(() => import('@features/contact-us/ContactUs'));
const AboutUs = lazy(() => import('@features/about-us/AboutUs'));
const Blog = lazy(() => import('@features/blog/Blog'));
const NotFound = lazy(() => import('@features/not-found/NotFound'));

const router = createBrowserRouter([
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'forget-password', element: <ForgetPassword /> }
    ]
  },
  {
    path: '',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about-us', element: <AboutUs /> },
      { path: 'contact-us', element: <ContactUs /> },
      { path: 'blog', element: <Blog /> },
      { path: 'products', element: <ProductList /> },
      { path: 'products/:productId', element: <ProductDetails /> },
      { path: 'cart', element: <Cart /> },
      { path: 'checkout/:cartId', element: <Checkout /> },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

const AppRoutes = () => {
  return (
    <Suspense fallback={ <p> loading... </p> }>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default AppRoutes;
