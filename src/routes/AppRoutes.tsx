import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AuthLayout, MainLayout } from '@layouts/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';
import { getSpecificProduct } from '@services/productService';

const Register = lazy(() => import('@features/auth/pages/register/Register'));
const Login = lazy(() => import('@features/auth/pages/login/Login'));
const ForgetPassword = lazy(() => import('@features/auth/pages/forget-password/ForgetPassword'));

const Cart = lazy(() => import('@features/cart/pages/cart/Cart'));
const Checkout = lazy(() => import('@features/cart/pages/checkout/Checkout'));

const ProductList = lazy(() => import('@features/products/pages/product-list/ProductList'));
const ProductDetails = lazy(() => import('@features/products/pages/product-details/ProductDetails'));
const Wishlist = lazy(() => import('@features/products/pages/wishlist/Wishlist'));

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
      { path: 'register', element: <PublicRoute> <Register /> </PublicRoute> },
      { path: 'login', element: <PublicRoute> <Login /> </PublicRoute> },
      { path: 'forget-password', element: <PublicRoute> <ForgetPassword /> </PublicRoute> }
    ]
  },
  {
    path: '',
    element: <MainLayout />,
    children: [
      { index: true, element: <ProtectedRoute> <Home /> </ProtectedRoute> },
      { path: 'about-us', element: <ProtectedRoute> <AboutUs /> </ProtectedRoute> },
      { path: 'contact-us', element: <ProtectedRoute> <ContactUs /> </ProtectedRoute> },
      { path: 'blog', element: <ProtectedRoute> <Blog /> </ProtectedRoute> },
      { path: 'products', element: <ProtectedRoute> <ProductList /> </ProtectedRoute> },
      { path: 'products/:productId', element: <ProtectedRoute> <ProductDetails /> </ProtectedRoute>, loader: getSpecificProduct },
      { path: 'wishlist', element: <ProtectedRoute> <Wishlist /> </ProtectedRoute> },
      { path: 'cart', element: <ProtectedRoute> <Cart /> </ProtectedRoute> },
      { path: 'checkout/:cartId', element: <ProtectedRoute> <Checkout /> </ProtectedRoute> },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

const queryClient = new QueryClient();

const AppRoutes = () => {
  return (
    <Suspense fallback={ <p> loading... </p> }>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster position='top-right' />
      </QueryClientProvider>
    </Suspense>
  )
}

export default AppRoutes;
