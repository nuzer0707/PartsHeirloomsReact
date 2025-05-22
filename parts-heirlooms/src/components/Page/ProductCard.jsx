// 引入 React
import React from 'react';

// 商品卡片組件
// Props:
// - imageUrl: 商品圖片 URL
// - title: 商品標題
// - description: 商品描述
// - price: 商品價格
// - onCardClick: 點擊卡片時觸發的函式，接收商品 ID 作為參數
function ProductCard({ imageUrl, title, description, price }) { // 修改 props，移除 productId，
  return (
    <div className="col">
      {/* 將點擊事件綁定到整個卡片容器 */}
      <div className="card shadow-sm h-100" style={{ cursor: 'pointer' }}> {/* 新增  cursor 樣式 */}
        {/* 新增圖片容器以控制長寬比 */}
        <div className="product-card-image-container">
          <img
            src={imageUrl || "https://fakeimg.pl/600x400/cccccc/909090?text=Image+Not+Available"}
            className="card-img-top product-card-image" // 保留 card-img-top，新增自訂 class
            width="100%" // 寬度由容器控制，但 CSS 會設定 height: 100%
            alt={title || "商品圖片"}
          />
        </div>
        <div className="card-body d-flex flex-column"> {/* d-flex flex-column 使內容垂直排列，並允許按鈕置底 */}
          <h5 className="card-title fw-bold">{title || "商品標題"}</h5>
          <p className="card-text flex-grow-1">{description || "商品描述"}</p> {/* flex-grow-1 使描述填滿可用空間 */}
          <div className="d-flex justify-content-between align-items-center "> {/* mt-auto 將按鈕和價格推到底部 */}
            <div className="btn-group">
              {/* 您可以在這裡添加按鈕，例如加入購物車 */}
            </div>
            <h4 className="text-danger">{price ? `$ ${price.toLocaleString()}` : "價格待議"}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

// 匯出 ProductCard 組件
export default ProductCard;