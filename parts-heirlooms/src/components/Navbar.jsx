// 引入 React
import React from 'react';
// 引入 React Router 的 Link 元件
import { Link } from 'react-router-dom';

// 導覽列組件
function Navbar() { // 不再需要 navigateTo prop
  const navbarCollapseId = "navbarPartsHeirloomsCollapse"; // 定義唯一的 ID

  return (
    // 參考 Carousel 範例，保持 fixed-top bg-dark navbar-dark
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark ">
      <div className="container-fluid px-5">
        <Link className="navbar-brand" to="/">零件傳承坊</Link> {/* 首頁 */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${navbarCollapseId}`} // 使用變數
          aria-controls={navbarCollapseId} // 使用變數
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id={navbarCollapseId}> {/* 使用變數 */}
          {/* 導覽連結靠左 */}
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            {/* 可以根據需要新增 "商品" 等主要導覽連結 */}
            <li className="nav-item">
              {/* 假設有一個商品列表頁 */}
              <Link className="nav-link" to="/products">商品</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">個人中心</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/seller-center">賣家中心</Link>
            </li>
          </ul>
          {/* 搜尋表單靠右 */}
          <form className="d-flex" role="search"> {/* 移除 align-items-center */}
            <input className="form-control me-2  " type="search" placeholder="搜尋商品" aria-label="Search" /> {/* 確認是標準大小 form-control */}
            <button className="btn btn-outline-secondary " type="submit" aria-label="搜尋"> {/* 改回圖示並加上 aria-label */}
              <i className="bi bi-search"></i>
            </button>
          </form>
          {/* 購物車圖示 */}
          <ul className="navbar-nav ms-2 d-flex align-items-center"> {/* ms-2 增加左邊間距 */}
            <li className="nav-item">
              {/* 購物車連結可以導向購物車頁面，或打開一個 modal */}
              <Link className="nav-link" to="/cart" aria-label="購物車">
                <i className="bi bi-cart" style={{ fontSize: '1.2rem' }}></i> {/* 調整圖示大小 */}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">註冊</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">登入</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// 匯出 Navbar 組件
export default Navbar;