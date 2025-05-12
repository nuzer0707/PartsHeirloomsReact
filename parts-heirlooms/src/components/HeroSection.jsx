// 引入 React
import React from 'react';
// 之後可能會用到 Link
// import { Link } from 'react-router-dom';

// Hero Section 組件
function HeroSection({ navigateTo }) { // 接收 navigateTo prop
  const handleNavigate = (e, page) => {
    e.preventDefault();
    navigateTo(page);
  };

  return (
    <section className="py-5 text-center container"> {/* container class 移到這裡 */}
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">零件傳承坊</h1>
          <p className="lead text-body-secondary">在這裡尋找您需要的二手電腦零組件。挖掘寶藏，賦予零件新生命！</p>
          <p>
            {/* 暫時使用 a 標籤，之後會換成 Link */}
            {/* <Link to="/sell" className="btn btn-primary my-2">我要販售</Link> */}
            {/* <Link to="/products" className="btn btn-secondary my-2 ms-2">瀏覽商品</Link> */}
            <a href="#" className="btn btn-primary my-2" onClick={(e) => handleNavigate(e, 'sell')}>我要販售</a> {/* 假設 'sell' 是販售頁面的路由 */}
            <a href="#" className="btn btn-secondary my-2 ms-2" onClick={(e) => handleNavigate(e, 'products')}>瀏覽商品</a>
          </p>
        </div>
      </div>
    </section>
  );
}

// 匯出 HeroSection 組件
export default HeroSection;