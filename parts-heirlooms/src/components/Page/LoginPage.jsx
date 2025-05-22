import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 引入 Link 和 useNavigate
import users from '../../data/users'; // 引入 users 資料
import { useAuth } from '../../contexts/AuthContext'; // 引入 useAuth

function LoginPage() { // 不再接收 navigateTo prop
  const navigate = useNavigate(); // 使用 useNavigate 鉤子
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const { login } = useAuth(); // 使用 useAuth 獲取 login 函式

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
        <form onSubmit={handleLogin}>
          {/* 由於沒有 vite.svg，暫時使用文字或 placeholder */}
          {/* <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
          <h1 className="h3 mb-3 fw-normal">請登入</h1>

          {loginError && <div className="alert alert-danger">{loginError}</div>}

          <div className="form-floating mb-3">
            <input
              type="username"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="floatingInput">帳號</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="floatingPassword">密碼</label>
          </div>

          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              記住我
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">登入</button>
          <p className="mt-3">
            還沒有帳號？ <Link to="/register">前往註冊</Link>
          </p>
          <p className="mt-5 mb-3 text-body-secondary">&copy; 2024–2025</p> {/* 年份可調整 */}
        </form>
      </main>
    </div>
  );

  function handleLogin(event) {
    event.preventDefault(); // 防止表單默認提交

    // 在 users 資料中尋找匹配的用戶
    const user = users.find(u => u.email === username && u.password_hash === password); // 注意：這裡直接比較密碼，實際應用中應使用安全的密碼驗證方式

    if (user) {
      console.log('登入成功:', user);
      setLoginError('');
      login(user); // 呼叫 login 函式，設置使用者狀態
      navigate('/'); // 導向首頁 (使用 navigate 導向根路徑)
    } else {
      console.log('登入失敗');
      setLoginError('電子郵件或密碼不正確');
    }
  }
}

export default LoginPage;