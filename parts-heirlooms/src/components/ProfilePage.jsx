import React from 'react';

function ProfilePage() {
  return (
    <div className="container mt-5 pt-5"> {/* 添加 pt-5 確保內容在 Navbar 下方 */}
      <h2>個人中心</h2>
      <p>這裡是使用者個人資料、交易紀錄等內容。</p>
    </div>
  );
}

export default ProfilePage;