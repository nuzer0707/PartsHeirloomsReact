import React from 'react';

function CartPage() {
  return (
    <div className="container mt-5 pt-5"> {/* 添加 pt-5 確保內容在 Navbar 下方 */}
      <h2>購物車</h2>
      <p>這裡是購物車商品列表及結帳按鈕。</p>
      {/* 之後會加入實際的購物車內容 */}
    </div>
  );
}

export default CartPage;