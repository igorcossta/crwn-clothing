import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from '../App';
import CategoryContainer from '../components/category-container';
import CheckoutPage from '../pages/checkout';
import HomePage from '../pages/homepage';
import NotFound from '../pages/notfound';
import ShopPage from '../pages/shop';
import SignInSignUp from '../pages/sign-in-sign-up';
import CategorySingle from '../components/category-single';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />

          <Route path="shop" element={<ShopPage />}>
            <Route index element={<CategoryContainer />} />
            <Route path=":categoryId" element={<CategorySingle />} />
          </Route>

          <Route path="signin" element={<SignInSignUp />} />
          <Route path="checkout" element={<CheckoutPage />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
