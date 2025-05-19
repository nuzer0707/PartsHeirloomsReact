import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products'; // 引入商品核心資料
import productContent from '../data/product_content'; // 引入商品內容資料
import productImages from '../data/product_images'; // 引入商品圖片資料

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [content, setContent] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // 根據 productId 尋找對應的商品核心資料
    const foundProduct = products.find(p => p.product_id === productId);
    setProduct(foundProduct);

    // 尋找對應的商品內容資料
    const foundContent = productContent.find(item => item.product_id === productId);
    setContent(foundContent);

    // 尋找對應的商品圖片資料
    const foundImages = productImages.filter(item => item.product_id === productId);
    setImages(foundImages);

  }, [productId]);

  if (!product || !content) {
    return <div>商品載入中或找不到商品...</div>;
  }

  // 這裡將是商品詳細頁面的 UI
  return (
    <div className="container mt-5 pt-5"> {/* Added pt-5 for spacing below navbar */}
      <div className="row">
        <div className="col-md-6">
          {images.length > 0 ? (
            <img src={images[0].image_url} className="img-fluid" alt={content.title} />
          ) : (
            <img src="https://fakeimg.pl/600x400/cccccc/909090?text=No+Image" className="img-fluid" alt="無圖片" />
          )}
        </div>
        <div className="col-md-6">
          <h1>{content.title}</h1>
          <h2 className="text-success">${product.price}</h2>
          <p>{content.full_description}</p>
          <p>庫存數量: {product.quantity}</p> {/* 顯示產品數量 */}
          {/* 其他商品詳細資訊，例如評價等 */}
          <button className="btn btn-primary btn-lg">
            {/* 加入購物車 ICON，這裡使用一個簡單的文字代替，如果專案有圖示庫可以替換 */}
            <i className="bi bi-cart-plus"></i> 加入購物車
          </button>
        </div>
      </div>
      {/* 您可以在這裡添加更多區塊，例如商品規格、評價等 */}
    </div>
  );
};

export default ProductDetailPage;
