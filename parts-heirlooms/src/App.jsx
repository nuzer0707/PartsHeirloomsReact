// 引入 React 和 useState
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// 引入 Navbar 組件
import Navbar from './components/Navbar';
// 引入 Footer 組件
import Footer from './components/Footer';
// 引入 HeroSection 組件
import HeroSection from './components/HeroSection';
// 引入 ProductList 組件
import ProductList from './components/ProductList';
// 引入 ScrollToTopButton 組件
import ScrollToTopButton from './components/ScrollToTopButton';
// 引入頁面元件
import RegisterPage from './components/Page/RegisterPage';
import LoginPage from './components/Page/LoginPage';
import ProfilePage from './components/Page/ProfilePage';
import SellerCenterPage from './components/Page/SellerCenterPage';
import ProductsPage from './components/Page/ProductsPage';
import SellPage from './components/Page/SellPage';
import CartPage from './components/Page/CartPage';
import ProductDetailPage from './components/Page/ProductDetailPage'; // 引入商品詳細頁面組件

import products from './data/products'; // 引入商品資料
import { AuthProvider } from './contexts/AuthContext'; // 引入 AuthProvider
import { DataProvider } from './contexts/DataContext'; // 引入 DataProvider，用於提供全局資料

// App 主要組件
function App() {
  return (
    <AuthProvider> {/* 使用 AuthProvider 包裹，提供認證相關的 Context */}
      <BrowserRouter>
        <Navbar /> {/* Navbar 將使用 Link/NavLink */}
        {/* 主要內容區域 */}
        <main className="mt-0 mb-4" style={{ paddingTop: '56px' }}> {/* Navbar 是 fixed-top，所以 main 需要 padding-top */}
          {/* DataProvider 包裹 Routes，確保所有路由下的組件都能訪問到共用資料 */}
          <DataProvider>
            <Routes>
              <Route path="/" element={
                <>
                  <HeroSection />
                  <ProductList listTitle="最多人觀看" /> {/* products 改從 Context 獲取 */}
                </>
              } />
              <Route path="/products" element={<ProductsPage />} /> {/* products 改從 Context 獲取 */}
              <Route path="/products" element={<ProductDetailPage />} >
                <Route path=":productId" element={<ProductDetailPage />} />
              </Route>
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/seller-center" element={<SellerCenterPage />} />
              <Route path="/sell" element={<SellPage />} />
              <Route path="/cart" element={<CartPage />} />
              {/* Add a catch-all route for 404 */}
              <Route path="*" element={
                <div>
                  <h2>Page Not Found</h2>
                  <p>The requested page does not exist.</p>
                </div>
              } />
            </Routes>
          </DataProvider>
        </main>
        <Footer />
        <ScrollToTopButton /> {/* 加入回到頂部按鈕 */}
      </BrowserRouter>
    </AuthProvider>
  );
}

// 匯出 App 組件
export default App;
