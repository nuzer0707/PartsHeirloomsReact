// 引入 React 和 useState
import React, { useState } from 'react';
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
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import SellerCenterPage from './components/SellerCenterPage';
import ProductsPage from './components/ProductsPage';
import SellPage from './components/SellPage';
import CartPage from './components/CartPage';
import { products } from './data/products'; // 引入商品資料

// App 主要組件
function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 預設顯示首頁

  // 導航函式
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Navbar navigateTo={navigateTo} /> {/* 將 navigateTo 傳遞給 Navbar */}
      {/* 主要內容區域 */}
      <main className="mt-0 mb-4" style={{ paddingTop: '56px' }}> {/* Navbar 是 fixed-top，所以 main 需要 padding-top */}
        {currentPage === 'home' && (
          <>
            <HeroSection navigateTo={navigateTo} /> {/* 將 navigateTo 傳遞給 HeroSection */}
            <ProductList products={products} listTitle="最多人觀看" />
          </>
        )}
        {currentPage === 'products' && <ProductsPage products={products} />} {/* Pass products to ProductsPage */}
        {currentPage === 'register' && <RegisterPage navigateTo={navigateTo} />} {/* 將 navigateTo 傳遞給 RegisterPage */}
        {currentPage === 'login' && <LoginPage navigateTo={navigateTo} />} {/* 將 navigateTo 傳遞給 LoginPage */}
        {currentPage === 'profile' && <ProfilePage />}
        {currentPage === 'seller-center' && <SellerCenterPage />}
        {currentPage === 'sell' && <SellPage />}
        {currentPage === 'cart' && <CartPage />}
        {/* 其他頁面可以陸續加入 */}
      </main>
      <Footer />
      <ScrollToTopButton /> {/* 加入回到頂部按鈕 */}
    </>
  );
}

// 匯出 App 組件
export default App;
