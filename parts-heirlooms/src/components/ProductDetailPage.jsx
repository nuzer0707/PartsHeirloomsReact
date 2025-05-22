import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // 引入 useParams
import products from '../data/products'; // 引入商品核心資料
import productContent from '../data/product_content'; // 引入商品內容資料
import productImages from '../data/product_images'; // 引入商品圖片資料

const ProductDetailPage = () => { // 不再接收 productId prop
  const { productId } = useParams(); // 使用 useParams 獲取商品 ID
  const [product, setProduct] = useState(null);
  const [content, setContent] = useState(null);
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState(''); // 新增 mainImage 狀態

  useEffect(() => {
    // 確保 productId 存在
    if (productId) {
      // 將 productId 轉換為數字，以便與資料中的 product_id 比較
      const numericProductId = parseInt(productId, 10);

      // 根據 productId 尋找對應的商品核心資料
      const foundProduct = products.find(p => p.product_id === numericProductId);
      setProduct(foundProduct);

      // 尋找對應的商品內容資料
      const foundContent = productContent.find(item => item.product_id === numericProductId);
      setContent(foundContent);

      // 尋找對應的商品圖片資料
      const foundImages = productImages.filter(item => item.product_id === numericProductId);
      setImages(foundImages);

      // 設定主圖片為第一張圖片，如果存在的話
      if (foundImages.length > 0) {
        setMainImage(foundImages[0].image_url);
      } else {
        setMainImage("https://fakeimg.pl/600x400/cccccc/909090?text=No+Image");
      }
    }

  }, [productId]); // 依賴於從 URL 獲取的 productId

  if (!productId || !product || !content) {
    // 如果沒有 productId 或者找不到商品，顯示載入中或找不到商品
    return <div>{productId ? '商品載入中或找不到商品...' : '請選擇一個商品查看詳細資訊。'}</div>;
  }

  // 這裡將是商品詳細頁面的 UI
  return (
    <div className="container mt-5 pt-5"> {/* Added pt-5 for spacing below navbar */}
      <div className="row">
        <div className="col-md-6">
          {/* 主圖片顯示 */}
          <img src={mainImage} className="img-fluid mb-3 rounded shadow-sm" alt={content.title} style={{ maxHeight: '500px', width: '100%', objectFit: 'contain' }} />
          {/* 縮略圖列表 */}
          <div className="row g-2 justify-content-center"> {/* g-2 for small gutter, justify-content-center to center thumbnails */}
            {images.map((img, index) => (
              <div className="col-3 col-md-3 col-lg-3 col-xl-3" key={index}> {/* 響應式調整，在所有尺寸下每行顯示4個縮略圖 */}
                <img
                  src={img.image_url}
                  className={`img-fluid rounded thumbnail-image ${img.image_url === mainImage ? 'border border-primary border-3' : 'border border-light'}`}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setMainImage(img.image_url)}
                  style={{ cursor: 'pointer', width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
            {/* 如果圖片少於4張，可以添加一些佔位符或調整佈局 */}
            {images.length < 4 && Array.from({ length: 4 - images.length }).map((_, index) => (
              <div className="col-3 col-md-3 col-lg-3 col-xl-3" key={`placeholder-${index}`}>
                <img
                  src="https://fakeimg.pl/150x100/eeeeee/cccccc?text=No+Image"
                  className="img-fluid rounded thumbnail-image"
                  alt="Placeholder"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <h1>{content.title}</h1>
          <h2 className="text-success">${product.price}</h2>
          <p>{content.short_description}</p>
          <p>庫存數量: {product.quantity}</p> {/* 顯示產品數量 */}
          {/* 其他商品詳細資訊，例如評價等 */}
          <button className="btn btn-primary btn-lg">
            {/* 加入購物車 ICON，這裡使用一個簡單的文字代替，如果專案有圖示庫可以替換 */}
            <i className="bi bi-cart-plus"></i> 加入購物車
          </button>
        </div>
        <div className="container mt-5 pt-5">
          <h3>{content.full_description}</h3>
        </div>
      </div>
      {/* 您可以在這裡添加更多區塊，例如商品規格、評價等 */}
    </div>
  );
};

export default ProductDetailPage;
