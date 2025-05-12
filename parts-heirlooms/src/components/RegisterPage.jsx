import React from 'react';

function RegisterPage({ navigateTo }) { // 接收 navigateTo prop
  // 內聯樣式，模擬 sign-in.css 的基本效果
  const formSigninStyle = {
    maxWidth: '330px',
    padding: '1rem',
  };

  const bodyStyle = { // 模擬範例中 body 的樣式，使表單垂直居中
    display: 'flex',
    alignItems: 'center',
    paddingTop: '40px', // 根據 Navbar 高度調整
    paddingBottom: '40px',
    // backgroundColor: '#f5f5f5', // 可選背景色
    minHeight: 'calc(100vh - 56px - 72.8px)', // 減去 Navbar 和 Footer 的大致高度
  };

  return (
    <div style={bodyStyle} className="text-center">
      <main style={formSigninStyle} className="w-100 m-auto">
        <form>
          <h1 className="h3 mb-3 fw-normal">請註冊</h1>

          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">電子郵件地址</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">密碼</label>
          </div>
          {/* 可以選擇性加入確認密碼欄位 */}
          {/* <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password" />
            <label htmlFor="floatingConfirmPassword">確認密碼</label>
          </div> */}

          <button className="btn btn-primary w-100 py-2" type="submit">註冊</button>
          <p className="mt-3">
            已經有帳號了？ <a href="#" onClick={(e) => { e.preventDefault(); navigateTo('login'); }}>前往登入</a>
          </p>
          <p className="mt-5 mb-3 text-body-secondary">&copy; 2024–2025</p> {/* 年份可調整 */}
        </form>
      </main>
    </div>
  );
}

export default RegisterPage;