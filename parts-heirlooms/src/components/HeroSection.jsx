// 引入 React
import React from 'react';

// Hero Section 組件
function HeroSection({ navigateTo }) { // 接收 navigateTo prop
  const handleNavLinkClick = (e, page) => {
    e.preventDefault(); // 阻止預設的連結行為
    navigateTo(page); // 呼叫 navigateTo 函式切換頁面
  };

  return (
    <section className="py-5 text-center container"> {/* container class 移到這裡 */}
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">零件傳承坊</h1>
          <p className="lead text-body-secondary">在這裡尋找您需要的二手電腦零組件。挖掘寶藏，賦予零件新生命！</p>
          <p>
            {/* 我要販售連結 */}
            <a href="/sell" className="btn btn-primary my-2" onClick={(e) => handleNavLinkClick(e, 'sell')}>我要販售</a>
            {/* 瀏覽商品連結 */}
            <a href="/products" className="btn btn-secondary my-2 ms-2" onClick={(e) => handleNavLinkClick(e, 'products')}>瀏覽商品</a>
          </p>
        </div>
      </div>
    </section>
  );
}

// 匯出 HeroSection 組件
export default HeroSection;