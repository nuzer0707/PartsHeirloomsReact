// 引入 React
import React from 'react';
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

// App 主要組件
function App() {
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
      <Navbar />
      {/* 主要內容區域，之後會由 React Router 控制 */}
      {/* 移除 main 上的 container class，因為子元件內部會處理 */}
      <main className="mt-0 mb-4"> {/* 調整上下邊距，HeroSection 通常直接貼齊 Navbar */}
        <HeroSection />
        <ProductList products={sampleProducts} listTitle="熱門商品" />
      </main>
      <Footer />
      <ScrollToTopButton /> {/* 加入回到頂部按鈕 */}
    </>
  );
}

// 匯出 App 組件
export default App;
