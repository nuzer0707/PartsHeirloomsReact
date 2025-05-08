// 引入 React
import React from 'react';
// 之後可能會用到 Link
// import { Link } from 'react-router-dom';

// 商品卡片組件
// Props:
// - imageUrl: 商品圖片 URL
// - title: 商品標題
// - description: 商品描述
// - price: 商品價格
// - productUrl: 商品詳情頁面 URL (暫時用 #)
function ProductCard({ imageUrl, title, description, price, productUrl = "#" }) {
  return (
    <div className="col">
      <a href={productUrl}>
        <div className="card shadow-sm h-100"> {/* 新增 h-100 使卡片等高 */}
          {/* 新增圖片容器以控制長寬比 */}
          <div className="product-card-image-container">
            <img
              src={imageUrl || "https://fakeimg.pl/600x400/cccccc/909090?text=Image+Not+Available"}
              className="card-img-top product-card-image" // 保留 card-img-top，新增自訂 class
              width="100%" // 寬度由容器控制，但 CSS 會設定 height: 100%
              // height="225" -- 移除固定高度
              alt={title || "商品圖片"}
            />
          </div>
          <div className="card-body d-flex flex-column"> {/* d-flex flex-column 使內容垂直排列，並允許按鈕置底 */}
            <h5 className="card-title">{title || "商品標題"}</h5>
            <p className="card-text flex-grow-1">{description || "商品描述"}</p> {/* flex-grow-1 使描述填滿可用空間 */}
            <div className="d-flex justify-content-between align-items-center mt-auto"> {/* mt-auto 將按鈕和價格推到底部 */}
              <div className="btn-group">
                {/* <Link to={productUrl} className="btn btn-sm btn-outline-secondary">查看詳情</Link> */}
                {/* <a href={productUrl} className="btn btn-sm btn-outline-secondary">查看詳情</a> */}
              </div>
              <small className="text-body-secondary">{price ? `NT$ ${price.toLocaleString()}` : "價格待議"}</small>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

// 匯出 ProductCard 組件
export default ProductCard;