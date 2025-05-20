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
import ProductDetailPage from './components/ProductDetailPage'; // 引入商品詳細頁面組件
import products from './data/products'; // 引入商品資料
import { AuthProvider } from './contexts/AuthContext'; // 引入 AuthProvider

// App 主要組件
function App() {
  // 使用 state 來追蹤當前頁面和選中的商品 ID
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState(null);

  // 導航到指定頁面的函式，可選地傳入商品 ID
  const navigateTo = (page, productId = null) => {
    setCurrentPage(page);
    setSelectedProductId(productId);
  };

  // 根據當前頁面渲染不同的組件
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection navigateTo={navigateTo} />
            {/* 將 navigateTo 傳遞給 ProductList */}
            <ProductList products={products} listTitle="最多人觀看" navigateTo={navigateTo} />
          </>
        );
      case 'products':
        // 將 navigateTo 傳遞給 ProductsPage
        return <ProductsPage products={products} navigateTo={navigateTo} />;
      case 'productDetail':
        // 將選中的商品 ID 傳遞給 ProductDetailPage
        return <ProductDetailPage productId={selectedProductId} />;
      case 'register':
        return <RegisterPage navigateTo={navigateTo} />;
      case 'login':
        return <LoginPage navigateTo={navigateTo} />;
      case 'profile':
        return <ProfilePage />;
      case 'sellerCenter':
        return <SellerCenterPage />;
      case 'sell':
        return <SellPage />;
      case 'cart':
        return <CartPage />;
      default:
        return (
          <div>
            <h2>Page Not Found</h2>
            <p>The requested page does not exist.</p>
          </div>
        );
    }
  };

  return (
    <AuthProvider> {/* 使用 AuthProvider 包裹 */}
      <Navbar navigateTo={navigateTo} /> {/* 將 navigateTo 傳遞給 Navbar */}
      {/* 主要內容區域 */}
      <main className="mt-0 mb-4" style={{ paddingTop: '56px' }}> {/* Navbar 是 fixed-top，所以 main 需要 padding-top */}
        {renderPage()} {/* 渲染當前頁面 */}
      </main>
      <Footer />
      <ScrollToTopButton /> {/* 加入回到頂部按鈕 */}
    </AuthProvider>
  );
}

// 匯出 App 組件
export default App;
