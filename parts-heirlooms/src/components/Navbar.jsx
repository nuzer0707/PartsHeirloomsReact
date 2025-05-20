// 引入 React
import React from 'react';
import { useAuth } from '../contexts/AuthContext'; // 引入 useAuth

// 導覽列組件
function Navbar({ navigateTo }) { // 接收 navigateTo prop
  const { user, logout } = useAuth(); // 使用 useAuth 獲取 user 狀態和 logout 函式
  const navbarCollapseId = "navbarPartsHeirloomsCollapse"; // 定義唯一的 ID

  const handleNavLinkClick = (e, page) => {
    e.preventDefault(); // 阻止預設的連結行為
    navigateTo(page); // 呼叫 navigateTo 函式切換頁面
  };

  return (
    // 參考 Carousel 範例，保持 fixed-top bg-dark navbar-dark
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark ">
      <div className="container-fluid px-5">
        {/* 首頁連結 */}
        <a className="navbar-brand" href="/" onClick={(e) => handleNavLinkClick(e, 'home')}>零件傳承坊</a>
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
            {/* 商品列表頁連結 */}
            <li className="nav-item">
              <a className="nav-link" href="/products" onClick={(e) => handleNavLinkClick(e, 'products')}>商品</a>
            </li>
            {/* 個人中心連結 */}
            <li className="nav-item">
              <a className="nav-link" href="/profile" onClick={(e) => handleNavLinkClick(e, 'profile')}>個人中心</a>
            </li>
            {/* 賣家中心連結 */}
            <li className="nav-item">
              <a className="nav-link" href="/seller-center" onClick={(e) => handleNavLinkClick(e, 'sellerCenter')}>賣家中心</a>
            </li>
          </ul>
          {/* 搜尋表單靠右 */}
          <form className="d-flex" role="search">
            <input className="form-control me-2  " type="search" placeholder="搜尋商品" aria-label="Search" /> {/* 確認是標準大小 form-control */}
            <button className="btn btn-outline-secondary " type="submit" aria-label="搜尋"> {/* 改回圖示並加上 aria-label */}
              <i className="bi bi-search"></i>
            </button>
          </form>
          {/* 購物車圖示 */}
          <ul className="navbar-nav ms-2 d-flex align-items-center"> {/* ms-2 增加左邊間距 */}
            {/* 購物車連結 */}
            <li className="nav-item">
              <a className="nav-link" href="/cart" aria-label="購物車" onClick={(e) => handleNavLinkClick(e, 'cart')}>
                <i className="bi bi-cart" style={{ fontSize: '1.2rem' }}></i>
              </a>
            </li>
            {/* 根據登入狀態顯示 */}
            {user ? (
              <li className="nav-item ms-2"> {/* ms-2 增加左邊間距 */}
                <div
                  className="bg-success text-emphasis rounded-circle d-inline-flex align-items-center justify-content-center"
                  style={{ width: '30px', height: '30px', cursor: 'pointer' }} // 設定圓形大小和游標樣式
                  onClick={() => {
                    logout(); // 呼叫 logout 函式
                    navigateTo('home'); // 導向首頁
                  }}
                  title={`登出 ${user.username}`} // 懸停提示
                >
                  <span className="fw-bold">{user.username.charAt(0).toUpperCase()}</span> {/* 顯示使用者名稱首字大寫 */}
                </div>
              </li>
            ) : (
              <>
                {/* 註冊連結 */}
                <li className="nav-item">
                  <a className="nav-link" href="/register" onClick={(e) => handleNavLinkClick(e, 'register')}>註冊</a>
                </li>
                {/* 登入連結 */}
                <li className="nav-item">
                  <a className="nav-link" href="/login" onClick={(e) => handleNavLinkClick(e, 'login')}>登入</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

// 匯出 Navbar 組件
export default Navbar;