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

// App 主要組件
function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 預設顯示首頁

  // 導航函式
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // 範例商品資料
  const sampleProducts = [
    {
      id: 1,
      imageUrl: "https://fakeimg.pl/600x400/cccccc/909090?text=RTX+3070",
      title: "高效能顯示卡 RTX 3070",
      description: "九成新，盒裝完整，遊戲與創作利器。尚在保固內。",
      price: 9500,
      productUrl: "#product1" // 之後會是動態路由
    },
    {
      id: 2,
      imageUrl: "https://fakeimg.pl/600x400/cccccc/909090?text=i7-10700K",
      title: "Intel Core i7-10700K CPU",
      description: "二手良品，功能正常，適合升級或組裝。",
      price: 5200,
      productUrl: "#product2"
    },
    {
      id: 3,
      imageUrl: "https://fakeimg.pl/600x400/cccccc/909090?text=16GB+RAM",
      title: "DDR4 3200 16GB (8GB*2) 記憶體",
      description: "知名品牌，穩定耐用，雙通道組合。",
      price: 1800,
      productUrl: "#product3"
    },
    {
      id: 1,
      imageUrl: "https://fakeimg.pl/600x400/cccccc/909090?text=RTX+3070",
      title: "高效能顯示卡 RTX 3070",
      description: "九成新，盒裝完整，遊戲與創作利器。尚在保固內。",
      price: 9500,
      productUrl: "#product1" // 之後會是動態路由
    },
    {
      id: 2,
      imageUrl: "https://fakeimg.pl/600x400/cccccc/909090?text=i7-10700K",
      title: "Intel Core i7-10700K CPU",
      description: "二手良品，功能正常，適合升級或組裝。",
      price: 5200,
      productUrl: "#product2"
    },
    {
      id: 3,
      imageUrl: "https://fakeimg.pl/600x400/cccccc/909090?text=16GB+RAM",
      title: "DDR4 3200 16GB (8GB*2) 記憶體",
      description: "知名品牌，穩定耐用，雙通道組合。",
      price: 1800,
      productUrl: "#product3"
    },
    {
      id: 1,
      imageUrl: "https://fakeimg.pl/600x400/cccccc/909090?text=RTX+3070",
      title: "高效能顯示卡 RTX 3070",
      description: "九成新，盒裝完整，遊戲與創作利器。尚在保固內。",
      price: 9500,
      productUrl: "#product1" // 之後會是動態路由
    },
    {
      id: 2,
      imageUrl: "https://fakeimg.pl/600x400/cccccc/909090?text=i7-10700K",
      title: "Intel Core i7-10700K CPU",
      description: "二手良品，功能正常，適合升級或組裝。",
      price: 5200,
      productUrl: "#product2"
    },
    {
      id: 3,
      imageUrl: "https://fakeimg.pl/600x400/cccccc/909090?text=16GB+RAM",
      title: "DDR4 3200 16GB (8GB*2) 記憶體",
      description: "知名品牌，穩定耐用，雙通道組合。",
      price: 1800,
      productUrl: "#product3"
    },
    {
      id: 1,
      imageUrl: "https://fakeimg.pl/600x400/cccccc/909090?text=RTX+3070",
      title: "高效能顯示卡 RTX 3070",
      description: "九成新，盒裝完整，遊戲與創作利器。尚在保固內。",
      price: 9500,
      productUrl: "#product1" // 之後會是動態路由
    },
    {
      id: 2,
      imageUrl: "https://fakeimg.pl/600x400/cccccc/909090?text=i7-10700K",
      title: "Intel Core i7-10700K CPU",
      description: "二手良品，功能正常，適合升級或組裝。",
      price: 5200,
      productUrl: "#product2"
    },
    {
      id: 3,
      imageUrl: "https://fakeimg.pl/600x400/cccccc/909090?text=16GB+RAM",
      title: "DDR4 3200 16GB (8GB*2) 記憶體",
      description: "知名品牌，穩定耐用，雙通道組合。",
      price: 1800,
      productUrl: "#product3"
    }

  ];

  return (
    <>
      <Navbar navigateTo={navigateTo} /> {/* 將 navigateTo 傳遞給 Navbar */}
      {/* 主要內容區域 */}
      <main className="mt-0 mb-4" style={{ paddingTop: '56px' }}> {/* Navbar 是 fixed-top，所以 main 需要 padding-top */}
        {currentPage === 'home' && (
          <>
            <HeroSection navigateTo={navigateTo} /> {/* 將 navigateTo 傳遞給 HeroSection */}
            <ProductList products={sampleProducts} listTitle="最多人觀看" />
          </>
        )}
        {currentPage === 'products' && <ProductsPage products={sampleProducts} />} {/* Pass products to ProductsPage */}
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
