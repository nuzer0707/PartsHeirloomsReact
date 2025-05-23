// 引入 React
import React, { useContext } from 'react'; // 引入 useContext
import { Link } from 'react-router-dom'; // 引入 Link
// 引入 ProductCard 組件
import ProductCard from './Page/ProductCard';
// 引入 DataContext，用於獲取共用資料
import { DataContext } from '../contexts/DataContext';

// 商品列表組件
// Props:
// - listTitle: 列表的標題 (例如 "熱門商品")
function ProductList({ listTitle = "商品列表", selectedCategory }) {
  // 從 DataContext 中獲取 products, productContent, productImages
  const { products, productContent, productImages } = useContext(DataContext);

  // 根據 selectedCategory 過濾商品
  const filteredProducts = selectedCategory
    ? products.filter(product => product.category_id === selectedCategory)
    : products;

  if (!filteredProducts || filteredProducts.length === 0) {
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
    <div className="album py-5 ">
      <div className="container">
        <h2 className="pb-2 border-bottom mb-4">{listTitle}</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3"> {/* xs,sm:1張; md:2張; lg+:3張 */}
          {filteredProducts.map((product) => {
            const content = productContent.find(item => item.product_id === product.product_id);
            // 找到對應商品的圖片，取第一張
            const images = productImages.filter(image => image.product_id === product.product_id);
            const imageUrl = images.length > 0 ? images[0].image_url : "https://fakeimg.pl/600x400/cccccc/909090?text=Image+Not+Available";

            // 假設每個 product 物件都有一個唯一的 product_id
            return (
              <div className="col" key={product.product_id}> {/* 將 Link 包裹在 col div 外 */}
                <Link to={`/products/${product.product_id}`} style={{ textDecoration: 'none', color: 'inherit' }}> {/* 使用 Link 導向商品詳細頁面 */}
                  <ProductCard
                    imageUrl={imageUrl} // 從 product_images 傳遞圖片 URL
                    title={content?.title || '無標題'}
                    description={content?.short_description || '無描述'}
                    price={product.price}
                  // onCardClick 不再需要
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// 匯出 ProductList 組件...
export default ProductList;
