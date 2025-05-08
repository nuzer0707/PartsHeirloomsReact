// 引入 React
import React from 'react';
// 引入 React Router 的 Link 元件 (稍後會用到)
// import { Link } from 'react-router-dom';

// 導覽列組件
function Navbar() {
  const navbarCollapseId = "navbarPartsHeirloomsCollapse"; // 定義唯一的 ID

  return (
    // 參考 Carousel 範例，保持 fixed-top bg-dark navbar-dark
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark ">
      <div className="container-fluid px-5">
        <a className="navbar-brand" href="#">零件傳承坊</a>
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
            <li className="nav-item">
              {/* 暫時使用 a 標籤，之後會換成 Link 元件並設定 active 狀態 */}
              <a className="nav-link active" aria-current="page" href="#">首頁</a> {/* 範例是 Home，改成首頁 */}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">使用者中心</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">登入</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">註冊</a>
            </li>
            {/* 可以根據需要加入更多導覽連結，如範例中的 Link, Disabled */}
          </ul>
          {/* 搜尋表單靠右 */}
          <form className="d-flex" role="search"> {/* 移除 align-items-center */}
            <input className="form-control me-2  " type="search" placeholder="搜尋商品" aria-label="Search" /> {/* 確認是標準大小 form-control */}
            <button className="btn btn-outline-secondary " type="submit" aria-label="搜尋"> {/* 改回圖示並加上 aria-label */}
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

// 匯出 Navbar 組件
export default Navbar;