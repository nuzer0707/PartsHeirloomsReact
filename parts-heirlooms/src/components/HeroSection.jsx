// 引入 React
import React from 'react';
import { Link } from 'react-router-dom';

// Hero Section 組件
function HeroSection() {
  return (
    <section className="py-5 text-center  bg-body-tertiary">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">零件傳承坊</h1>
          <p className="lead text-body-secondary">在這裡尋找您需要的二手電腦零組件。挖掘寶藏，賦予零件新生命！</p>
          <p>
            {/* 我要販售連結 */}
            <Link to="/sell" className="btn btn-primary my-2">我要販售</Link>
            {/* 瀏覽商品連結 */}
            <Link to="/products" className="btn btn-secondary my-2 ms-2">瀏覽商品</Link>
          </p>
        </div>
      </div>
    </section>
  );
}

// 匯出 HeroSection 組件
export default HeroSection;