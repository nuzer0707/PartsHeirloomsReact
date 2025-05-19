// 引入 React
import React from 'react';
import { useNavigate } from 'react-router-dom'; // 引入 useNavigate
// 引入 ProductCard 組件
import ProductCard from './ProductCard';
// 引入商品內容資料
import productContent from '../data/product_content';

// 商品列表組件
// Props:
// - products: 商品核心屬性物件的陣列
// - title: 列表的標題 (例如 "熱門商品")
function ProductList({ products = [], listTitle = "商品列表" }) {
  const navigate = useNavigate(); // 獲取 navigate 函式

  const handleCardClick = (productId) => {
    navigate(`/product/${productId}`); // 導航到商品詳細頁面
  };

  if (!products || products.length === 0) {
    return (
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <h2 className="pb-2 border-bottom mb-4">{listTitle}</h2>
          <p>目前沒有商品可顯示。</p>
        </div>
      </div>
    );
  }

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <h2 className="pb-2 border-bottom mb-4">{listTitle}</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3"> {/* xs,sm:1張; md:2張; lg+:3張 */}
          {products.map((product) => {
            const content = productContent.find(item => item.product_id === product.product_id);
            // 假設每個 product 物件都有一個唯一的 product_id
            return (
              <ProductCard
                key={product.product_id}
                // imageUrl={product.imageUrl} // 圖片資料現在在 product_images 中，這裡暫時不處理
                title={content?.title || '無標題'}
                description={content?.short_description || '無描述'}
                price={product.price}
                onCardClick={() => handleCardClick(product.product_id)} // 傳遞點擊事件處理函式
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

// 匯出 ProductList 組件
export default ProductList;
