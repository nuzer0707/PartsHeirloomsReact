// 引入 React
import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // 引入 Link 和 NavLink
import { useAuth } from '../contexts/AuthContext'; // 引入 useAuth

// 導覽列組件
function Navbar() { // 不再接收 navigateTo prop
  const { user, logout } = useAuth(); // 使用 useAuth 獲取 user 狀態和 logout 函式
  const navbarCollapseId = "navbarPartsHeirloomsCollapse"; // 定義唯一的 ID

  return (
    // 參考 Carousel 範例，保持 fixed-top bg-dark navbar-dark
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark ">
      <div className="container-fluid px-5">
        {/* 首頁連結 */}
        <Link className="navbar-brand" to="/">零件傳承坊</Link> {/* 使用 Link */}
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
              <NavLink className="nav-link" to="/products">商品</NavLink> {/* 使用 NavLink */}
            </li>
            {/* 個人中心連結 */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">個人中心</NavLink> {/* 使用 NavLink */}
            </li>
            {/* 賣家中心連結 */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/seller-center">賣家中心</NavLink> {/* 使用 NavLink */}
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
              <NavLink className="nav-link " to="/cart" aria-label="購物車" style={{ paddingBottom: 0, paddingTop: 0 }} > {/* 使用 NavLink */}
                <i className="bi bi-cart" style={{ fontSize: '1.8rem' }}></i>
              </NavLink>
            </li>
            {/* 根據登入狀態顯示 */}
            {user ? (
              <li className="nav-item"> {/* ms-2 增加左邊間距 */}
                <NavLink className="nav-link" to="/login">
                  <button
                    className="btn  btn-warning "
                    onClick={() => {
                      logout(); // 呼叫 logout 函式
                      // 登出後導向首頁，這裡可以使用 navigate 鉤子，但為了簡單起見，先不處理導向
                    }}
                    title={`登出 ${user.username}`} // 懸停提示
                  >
                    登出
                  </button>
                </NavLink>
              </li>
            ) : (
              <>
                {/*註冊連結*/}


                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/register">註冊</NavLink> 使用 NavLink 
                </li> */}

                {/* 登入連結 */}

                <li className="nav-item">
                  <NavLink className="nav-link" to="/login"><button className="btn  btn-warning">登入</button></NavLink> {/* 使用 NavLink */}
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