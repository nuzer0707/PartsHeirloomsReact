// 引入 React
import React from 'react';

// 頁尾組件
function Footer() {
  return (
    <footer className="text-body-secondary py-5 mt-auto"> {/* 新增 mt-auto 使其在內容不足時也能置底 */}
      <div className="container">
        {/* "回到頂部" 功能已移至 ScrollToTopButton 組件 */}
        <p className="mb-1">零件傳承坊 &copy; 2025</p>
        <p className="mb-0">一個充滿熱情的二手電腦零件交流平台。</p>
      </div>
    </footer>
  );
}

// 匯出 Footer 組件
export default Footer;